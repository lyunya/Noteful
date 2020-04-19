import React, { Component } from "react";
import Note from '../Note/Note'
import './NotesList.css'


class NotesList extends Component {
  render() {
    return (        
      <section className="NoteListMain">
        <ul>
          {this.props.Notes.map((note) => (
            <li className='listItem' key={note.id}>
              <Note id={note.id} name={note.name} modified={note.modified} />
            </li>
          ))}
        </ul>
        <button>Add note</button>
      </section>
    );
  }
}

export default NotesList;
