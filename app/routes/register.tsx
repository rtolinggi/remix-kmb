import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Button,
  Divider,
  Box,
} from "@mantine/core";
import { Form, Link } from "@remix-run/react";
import { At, Lock, User } from "tabler-icons-react";
import { AuthLayout } from "~/components/layouts";

export const Register = () => {
  return (
    <AuthLayout>
      <Paper
        withBorder
        shadow='md'
        px={30}
        py={20}
        mx='5px'
        radius='md'
        sx={() => ({ width: 370 })}>
        <Title
          align='center'
          order={2}
          sx={(theme) => ({
            color: theme.primaryColor,
          })}>
          Create Account
        </Title>
        <Divider my='xs' label='SIGN UP' labelPosition='center' />
        <Form>
          <TextInput
            icon={<User size={16} />}
            label='Full Name'
            placeholder='Youre Name'
            required
          />
          <TextInput
            icon={<At size={16} />}
            label='Email'
            placeholder='Youre Email'
            mt='md'
            required
          />
          <PasswordInput
            icon={<Lock size={16} />}
            label='Password'
            placeholder='Your password'
            required
            mt='md'
          />
          <PasswordInput
            icon={<Lock size={16} />}
            label='Confirm Password'
            placeholder='Repeat password'
            required
            mt='md'
          />
          <Button fullWidth mt='xl'>
            SIGN UP
          </Button>
        </Form>
        <Divider mt='xl' />
        <Text color='dimmed' size='sm' align='center' mt={5}>
          Already an Account?{" "}
          <Box
            component={Link}
            to={"/login"}
            sx={(theme) => ({
              color: theme.primaryColor,
              textDecoration: "none",
            })}>
            Login
          </Box>
        </Text>
      </Paper>
    </AuthLayout>
  );
};

export default Register;
