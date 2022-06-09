import {
  TextInput,
  PasswordInput,
  Checkbox,
  Paper,
  Title,
  Text,
  Group,
  Button,
  Box,
  Divider,
} from "@mantine/core";
import { Form, Link } from "@remix-run/react";
import { At, Lock } from "tabler-icons-react";
import { AuthLayout } from "~/components/layouts";

export const Login = () => {
  return (
    <AuthLayout>
      <Paper
        withBorder
        shadow='md'
        px={30}
        py={20}
        mt='-5%'
        mx='5px'
        radius='md'
        sx={() => ({ width: 370 })}>
        <Title
          align='center'
          order={2}
          sx={(theme) => ({
            color: theme.primaryColor,
          })}>
          Welcome back!
        </Title>
        <Divider my='xs' label='SIGN IN' labelPosition='center' />
        <Form>
          <TextInput
            icon={<At size={16} />}
            label='Email'
            placeholder='Youre Email'
            required
          />
          <PasswordInput
            icon={<Lock size={16} />}
            label='Password'
            placeholder='Your password'
            required
            mt='md'
          />
          <Group position='apart' mt='md'>
            <Checkbox label='Remember me' size='xs' />
            <Box
              component={Link}
              to={"/register"}
              sx={(theme) => ({
                color: theme.primaryColor,
                textDecoration: "none",
                fontSize: theme.fontSizes.xs,
              })}>
              Forgot Password?
            </Box>
          </Group>
          <Button fullWidth mt='xl'>
            Sign in
          </Button>
        </Form>
        <Divider mt='xl' />
        <Text color='dimmed' size='sm' align='center' mt={5}>
          Do not have an account yet?{" "}
          <Box
            component={Link}
            to={"/register"}
            sx={(theme) => ({
              color: theme.primaryColor,
              textDecoration: "none",
            })}>
            Create Account
          </Box>
        </Text>
      </Paper>
    </AuthLayout>
  );
};

export default Login;
