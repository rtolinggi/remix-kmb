import type { ButtonStylesParams, MantineThemeBase } from "@mantine/core";

const button: any = {
  Button: (theme: MantineThemeBase, params: ButtonStylesParams) => ({
    // Root Style
    root: {
      height: 36,
      padding: "0 22px",
      borderRadius: theme.radius.sm,
      fontWeight: "bold",
      textTransform: "uppercase",
    },

    // Variant Filled
    filled: {
      // color:
      //   theme.colorScheme === "dark"
      //     ? theme.colors[params.color || theme.white]
      //     : theme.colors[params.color || theme.primaryColor][1],
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors[params.color || theme.primaryColor][5]
          : theme.colors[params.color || theme.primaryColor][6],

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors[params.color || theme.primaryColor][4]
            : theme.colors[params.color || theme.primaryColor][5],
      },
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
