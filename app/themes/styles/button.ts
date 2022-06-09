import type { ButtonStylesParams, MantineThemeBase } from "@mantine/core";

const button = {
  Button: (theme: MantineThemeBase, params: ButtonStylesParams) => ({
    // Root Style
    root: {
      height: 36,
      padding: "0 22px",
      borderRadius: theme.radius.sm,
      fontWeight: "bold",
    },

    // Variant Filled
    filled: {
      color: theme.colors[params.color || theme.primaryColor][1],
    },

    // Variant Outline
    outline: {
      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
      },
    },
  }),
};

export const { Button } = button;
