import React, { Fragment } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Fragment>
      <Nav />
      <Main />
      <Footer />
    </Fragment>
  );
}
