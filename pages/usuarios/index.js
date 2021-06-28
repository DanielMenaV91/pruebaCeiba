import React, { useEffect, useState } from "react";
import Head from "next/head";
import Container from "../../components/container/Container";
import Users from "../../components/users/Users";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const { route } = router;

  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  };

  return (
    <Container route={route}>
      <Head>
        <title>Prueba ceiba punto 2</title>
      </Head>
      <h1>Usuarios</h1>
      <Users></Users>
    </Container>
  );
}
