import { prisma } from "@prisma/client";
import type { RegisterForm } from "./types.server";
import bcrypt from "bcryptjs";

export const createUser = async (user: RegisterForm) => {
  const passwordHash = await bcrypt.hash(user.password, 10);
  const neewUser = await prisma.user.create({
    data: {
      email: user.email,
      passwordHash,
      profile: {
        fullname: user.fullname,
        avatar: user.avatar,
        phone: user.phone,
        nik: user.nik,
      },
    },
  });
  return { id: neewUser, email: user.email };
};
