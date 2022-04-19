

import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./Header";
import { Note } from "./Note";
import Footer from "./Footer";


class App extends React.Component {
  render() {
    return (
      <>
        {Header}
        <Note />
        <Footer />
      </>
    );
  }
}

export { App };
