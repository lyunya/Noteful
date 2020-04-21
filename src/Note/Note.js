import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as moment from "moment";
import "./Note.css";

//send note content from here to note content component

class Note extends Component{
    render(){
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
            <button className="deleteNote">Delete Note</button>
          </section>
        );
}
}

export default Note;


//start with setting state to false, then on div click, flip state. if true, render, if false, don't render
// download, install moment js library, pass this.props.modified to relative time