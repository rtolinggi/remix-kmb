import type { MantineThemeOverride } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { Button } from "./styles";
import React from "react";

const myTheme: MantineThemeOverride = {
  colorScheme: "dark",
  primaryColor: "cyan",
  primaryShade: 5,
  defaultRadius: 2.5,
};

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <MantineProvider
      theme={myTheme}
      styles={{ Button }}
      withNormalizeCSS
      withGlobalStyles>
      <NotificationsProvider position='top-right'>
        {children}
      </NotificationsProvider>
    </MantineProvider>
  );
};

export default ThemeProvider;
