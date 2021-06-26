import React, { Fragment } from "react";
import Head from "next/head";
import Container from "../../components/container/Container";
import CreateUserForm from "../../components/createUserForm/CreateUserForm";
export default function index(params) {
  return (
    <Container>
      <Head>
        <title>Prueba ceiba punto 3</title>
      </Head>
      <h1>Formulario</h1>
      <CreateUserForm></CreateUserForm>
    </Container>
  );
}
