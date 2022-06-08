import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { NotificationsProvider } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import myTheme from "./themes";
import { Button } from "./themes/styles";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

const Document = () => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function App() {
  return (
    <MantineProvider
      theme={myTheme}
      styles={{ Button }}
      withNormalizeCSS
      withGlobalStyles
    >
      <NotificationsProvider position="top-right">
        <Document />
      </NotificationsProvider>
    </MantineProvider>
  );
}
