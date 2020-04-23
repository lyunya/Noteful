import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import FolderList from '../FolderList/FolderList'
import NotesList from '../NotesList/NotesList'
import Nav from '../Nav/Nav'
import "./FolderPage.css";


export default class FolderPage extends Component {
      static contextType = NotefulContext;

      getFolderNotes = (folderId) => {
        return this.context.notes.filter(
          (item) => item.folderId === folderId
        );
      };

      render() {
        return (
          <div className="FolderPage">
            <header className="App-header">
              <Nav />
            </header>
            <div className="folderList">
              <FolderList folders={this.context.folders} />
            </div>
            <div className="noteList">
              <NotesList Notes={this.getFolderNotes(this.props.match.params.folderId)} />
            </div>
          </div>
        );
      }
      }