import React, { Component } from 'react';
import FolderList from '../FolderList/FolderList'
import NotesList from '../NotesList/NotesList'
import Nav from '../Nav/Nav'
import "./FolderPage.css";


export default class FolderPage extends Component{
    render(){
        return (
          <div className="FolderPage">
            <header className="App-header">
              <Nav />
            </header>
            <div className="folderList">
              <FolderList folders={this.props.folders} />
            </div>
            <div className="noteList">
              <NotesList Notes={this.props.notes} />
            </div>
          </div>
        );

    }


}