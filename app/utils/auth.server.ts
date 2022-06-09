import { prisma } from "@prisma/client";
import { createCookieSessionStorage, json, redirect } from "@remix-run/node";
import type { LoginForm, RegisterForm } from "./types.server";
import { createUser } from "./user.server";
import bcrypt from "bcryptjs";

const secret = process.env.SESSION_SECRET;
if (!secret) {
  throw new Error("SESSION_SECRET is Not SET");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "kmb-session",
    secure: process.env.NODE_ENV === "production",
    secrets: [secret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export const register = async (form: RegisterForm) => {
  const exist = await prisma.user.count({
    where: {
      email: form.email,
    },
  });

  if (exist) {
    return json(
      { error: `User already exist with that email` },
      { status: 400 }
    );
  }

  // create user
  const newUser = await createUser(form);

  if (!newUser) {
    return json(
      {
        error: `Something went wrong trying to create a new user`,
        fields: { email: form.email, password: form.passwordHash },
      },
      {
        status: 400,
      }
    );
  }

  return redirect("/login");
};

export const login = async (form: LoginForm) => {
  const user = await prisma.user.findUnique({
    where: {
      email: form.email,
    },
  });

  if (!user || (await bcrypt.compare(form.passwordHash, user.passwordHash))) {
    return json({ error: `incorrect credential` }, { status: 400 });
  }
  return createUserSession(user.id, "/");
};

export const createUserSession = async (userId: string, redirectTo: string) => {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
};
