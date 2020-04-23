import React, { Component } from "react";
import Note from '../Note/Note'
import './NotesList.css'


class NotesList extends Component {
  render() {
    return (
      <section className="NoteListMain">
        <button className="AddNoteButton">Add note</button>
        <ul>
          {this.props.Notes.map((note) => (
            <li className="listItem" key={note.id}>
              <Note id={note.id} name={note.name} modified={note.modified} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default NotesList;
