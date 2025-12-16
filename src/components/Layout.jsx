import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ nav, children }) {
  return (
    <>
      <Header nav={nav} />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
