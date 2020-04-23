import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import Nav from "../Nav/Nav";
import NotesList from "../NotesList/NotesList";
import FolderList from "../FolderList/FolderList";
import  "./MainPage.css";


export default class MainPage extends Component {
      static contextType = NotefulContext;

      render() {
        return (
          <>
            <header className="App-header">
              <Nav />
            </header>
            <div className="content">
              <FolderList folders={this.context.folders} />
              <NotesList Notes={this.context.notes} />
            </div>
          </>
        );
      }
    }

