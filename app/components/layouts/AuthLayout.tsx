import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  wrapper: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const AuthLayout: React.FC = ({ children }) => {
  const { classes } = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
};

export default AuthLayout;
