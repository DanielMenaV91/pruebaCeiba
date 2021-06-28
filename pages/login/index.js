import React, { useEffect } from "react";
import Head from "next/head";
import Container from "../../components/container/Container";
import LoginForm from "../../components/loginForm/LoginForm";
import { useRouter } from "next/router";

export default function index(params) {
  const router = useRouter();
  const { route } = router;

  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
  };

  return (
    <Container route={route}>
      <Head>
        <title>Prueba ceiba punto 1</title>
      </Head>
      <h1>Login</h1>
      <LoginForm></LoginForm>
    </Container>
  );
}
