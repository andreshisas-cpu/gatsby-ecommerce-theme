import React from "react";
import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout nav={[]}>
      <h1>Página no encontrada</h1>
      <p>La ruta que buscas no existe.</p>
    </Layout>
  );
}
