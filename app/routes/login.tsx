import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Box,
  Divider,
} from "@mantine/core";
import { Form, Link } from "@remix-run/react";
import { At, Lock } from "tabler-icons-react";

export const Login = () => {
  return (
    <Container size={410}>
      <Paper withBorder shadow="md" px={30} py={20} mt={"40%"} radius="md">
        <Title
          align="center"
          order={2}
          sx={(theme) => ({
            color: theme.colors.cyan[4],
          })}
        >
          Welcome back!
        </Title>
        <Divider my="xs" label="SIGN IN" labelPosition="center" />
        <Form>
          <TextInput
            icon={<At size={16} />}
            label="Email"
            placeholder="Youre Email"
            required
          />
          <PasswordInput
            icon={<Lock size={16} />}
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" size="xs" />
            <Anchor<"a">
              onClick={(event) => event.preventDefault()}
              href="#"
              size="xs"
            >
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Sign in
          </Button>
        </Form>
        <Divider mt="xl" />
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Box
            component={Link}
            to={"/register"}
            sx={(theme) => ({
              color: theme.colors.cyan[4],
              textDecoration: "none",
            })}
          >
            Create Account
          </Box>
        </Text>
      </Paper>
    </Container>
  );
};

export default Login;
