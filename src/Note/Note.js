import React, { Component } from "react";
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext'
import * as moment from "moment";
import "./Note.css";

//send note content from here to note content component

class Note extends Component {
  static defaultProps = {
    onDeleteNote: () => {},
  };
  static contextType = NotefulContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const noteId = this.props.id;

    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        console.log(res, "this is the res");
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.deleteNote(noteId);
        console.log(this.context, "step 1");
        
        //allow parent to perform extra behaviour
        this.props.onDeleteNote(noteId);
        console.log(this.props, "step 2");
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    return (
        <section className="Note">
          <h2 className="Note__title">
            <Link to={`/note/${this.props.id}`}>{this.props.name}</Link>
          </h2>
          <div className="Note__dates">
            <div className="Note__dates-modified">
              Modified{" "}
              <span className="Date">
                {moment(this.props.modified).format("MMM Do YYYY")}
              </span>
            </div>
          </div>
          <button
            className="deleteNote"
            type="button"
            onClick={this.handleClickDelete}
          >
            Delete Note
          </button>
        </section>
    );
  }
}

export default Note;


//start with setting state to false, then on div click, flip state. if true, render, if false, don't render
// download, install moment js library, pass this.props.modified to relative time