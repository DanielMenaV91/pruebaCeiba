import React, { Fragment } from "react";
import Head from "next/head";
import Navigation from "../navigation/Navigation";

export default function Container(props) {
  return (
    <Fragment>
      <Head>
        <title>Prueba para ceiba</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
          integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Navigation></Navigation>
      <div className="container p-4">{props.children}</div>
    </Fragment>
  );
}
