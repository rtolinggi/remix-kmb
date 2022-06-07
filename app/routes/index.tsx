import { Container, Center, Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

type Message = {
  title: string;
  message: string;
  color?: string;
};

export default function IndexRoute() {
  const message: Message = {
    title: "Registrasi Berhasil",
    message: "Untuk mengaktifkan account, silahkan cek email masuk..!!",
    color: "cyan",
  };
  return (
    <Container size="md" p="sm">
      <Center>
        <Button onClick={() => showNotification(message)}>Notifikasi</Button>
      </Center>
    </Container>
  );
}
