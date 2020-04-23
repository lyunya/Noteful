import React, { Component } from "react";
import NotefulContext from "../NotefulContext";
import Nav from "../Nav/Nav"
import Folder from "../Folder/Folder";
import Note from "../Note/Note"
import NoteContent from "../NoteContent/NoteContent";
import "./NotePage.css";

export default class NotePage extends Component {
        static defaultProps = {
          match: {
            params: {},
          },
        };
        static contextType = NotefulContext;

        findFolder = (folders = [], folderId) =>
          folders.find((folder) => folder.id === folderId);

        findNote = (notes = [], noteId) =>
          notes.find((note) => note.id === noteId);

        handleDeleteNote = (noteId) => {
          this.props.history.push('/');
        };

        render() {
          const { notes, folders } = this.context;
          console.log(this.context, "this is the context");
          const { noteId } = this.props.match.params;
          const note = this.findNote(notes, noteId) || {};
          const folder = this.findFolder(folders, note.folderId);
          console.log(folder, "this is the folder");
          console.log(note.folderId, "this is the note.folderID");
          //check whether folderId is null
          if(note.folderId){
          return (
            <div className="NotePage">
              <Nav />
              <div className="sideBar">
                <Folder name={folder.name} id={folder.id} />
                <button
                  className="goBackButton"
                  onClick={this.props.history.goBack}
                >
                  Go Back
                </button>
              </div>
              <div className="Note">
                <Note
                  id={note.id}
                  name={note.name}
                  modified={note.modified}
                  onDeleteNote={this.handleDeleteNote}
                />
                <div className="noteContent">
                  <NoteContent content={note.content} />
                </div>
              </div>
            </div>
          );
          } else {
            return (
              <div></div>
            )
          }
        }
      }

