import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./Header";
import { Note } from "./Note";
import Footer from "./Footer";
import notes from "../notes";

class App extends React.Component {
  //currentYear = new Date().getFullYear();
  render() {
    return (
      <>
        {Header}
        {notes.map((note) => {
          return (
            <Note Key={note.key} title={note.title} content={note.content} />
          );
        })}
        <Footer />
        {this.currentYear}
      </>
    );
  }
}

export { App };
