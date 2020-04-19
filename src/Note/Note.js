import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Note.css";

//send note content from here to note content component

class Note extends Component{
    render(){
        return (
          <section className="Note">
            <h2 className="Note__title">
              <Link to={`/note/${this.props.id}`}>
                {this.props.name}
                </Link>
            </h2>
            <div className="Note__dates">
              <div className="Note__dates-modified">
                Modified <span className="Date">{this.props.modified}</span>
              </div>
            </div>
            <button>Delete Note</button>
          </section>
        );
}
}

export default Note;