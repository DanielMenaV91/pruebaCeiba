import React, { Fragment } from "react";
import Head from "next/head";
import Container from "../../components/container/Container";
import Users from "../../components/users/Users";

export default function index({ users }) {
  return (
    <Container>
      <Head>
        <title>Prueba ceiba punto 2</title>
      </Head>
      <h1>Usuarios</h1>
      <Users users={users}></Users>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const users = await res.json();
  try {
    if (
      typeof users !== "undefined" &&
      users !== null &&
      Array.isArray(users.data)
    ) {
      return { props: { users: users } };
    } else {
      return {
        props: {},
      };
    }
  } catch (error) {
    console.log("Error al momento de consultar el servicio", error);
    return {
      props: {},
    };
  }
}
