import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../Nav/Nav"
import Folder from "../Folder/Folder";
import Note from "../Note/Note"
import NoteContent from "../NoteContent/NoteContent";
import "./NotePage.css";

class NotePage extends Component {
    
  render() {
    return (
      <div className="NotePage">
        <Nav />
        <div className="sideBar">
          <Folder name={this.props.folder.name} id={this.props.folder.id} />
          <button className="goBackButton" onClick={this.props.history.goBack}>
            Go Back
          </button>
        </div>
        <div className="Note">
          <Note
            id={this.props.note.id}
            modified={this.props.note.modified}
            name={this.props.note.name}
          />
          <div className="noteContent">
            <NoteContent content={this.props.note.content} />
          </div>
        </div>
      </div>
    );
    
  }
}

export default withRouter(NotePage);