import React, { useEffect } from "react";
import Container from "../components/container/Container";
import Users from "../components/users/Users";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      router.push("/usuarios");
    }
  };

  return "";
}
