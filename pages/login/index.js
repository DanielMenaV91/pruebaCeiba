import React, { Fragment } from "react";
import Head from "next/head";
import Container from "../../components/container/Container";
import LoginForm from "../../components/loginForm/LoginForm";

export default function index(params) {
  return (
    <Container>
      <Head>
        <title>Prueba ceiba punto 1</title>
      </Head>
      <h1>Loguin</h1>
      <LoginForm></LoginForm>
    </Container>
  );
}
