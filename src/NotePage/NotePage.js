import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../Nav/Nav"
import Folder from "../Folder/Folder";
import Note from "../Note/Note"
import NoteContent from "../NoteContent/NoteContent";

class NotePage extends Component {
    
  render() {
      console.log(this.props.notes);
    return (
      <div>
        <Nav />
        <div className="sideBar">
          <button onClick={this.props.history.goBack}>Go Back</button>
          <Folder name={this.props.folder.name} id={this.props.folder.id} />
        </div>
        <Note
          id={this.props.note.id}
          modified={this.props.note.modified}
          name={this.props.note.name}
        />
        <NoteContent content={this.props.note.content} />
      </div>
    );
    
  }
}

export default withRouter(NotePage);