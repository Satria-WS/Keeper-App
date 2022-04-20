import React from "react";

class Note extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="note">
        <p>{this.props.Key}</p>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export { Note };
