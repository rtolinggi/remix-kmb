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
  Divider,
  Box,
} from "@mantine/core";
import { Form, Link } from "@remix-run/react";
import { At, Lock, User } from "tabler-icons-react";

export const Register = () => {
  return (
    <Container size={410}>
      <Paper withBorder shadow="md" px={30} py={20} mt={"25%"} radius="md">
        <Title
          align="center"
          order={2}
          sx={(theme) => ({
            color: theme.colors.cyan[4],
          })}
        >
          Create Account
        </Title>
        <Divider my="xs" label="SIGN UP" labelPosition="center" />
        <Form>
          <TextInput
            name="fullname"
            icon={<User size={16} />}
            label="Full Name"
            placeholder="Youre name"
            required
          />
          <TextInput
            name="email"
            icon={<At size={16} />}
            label="Email"
            placeholder="Youre Email"
            required
            mt="md"
          />
          <PasswordInput
            name="password"
            icon={<Lock size={16} />}
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <PasswordInput
            name="confirmPassword"
            icon={<Lock size={16} />}
            label="Confirm Password"
            placeholder="Repeat password"
            required
            my="md"
          />
          <Button fullWidth mt="xl">
            Sign in
          </Button>
        </Form>
        <Divider mt="xl" />
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Box
            component={Link}
            to={"/login"}
            sx={(theme) => ({
              color: theme.colors.cyan[4],
              textDecoration: "none",
            })}
          >
            Login
          </Box>
        </Text>
      </Paper>
    </Container>
  );
};

export default Register;
