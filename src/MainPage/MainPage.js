import React, { Component } from 'react';
import Nav from "../Nav/Nav";
import NotesList from "../NotesList/NotesList";
import FolderList from "../FolderList/FolderList";


export default class MainPage extends Component{
    render(){
        return (
            <>
        <header className="App-header">
          <Nav /> 
        </header>
          <div className="content">
            <FolderList folders={this.props.folders} />
            <NotesList Notes={this.props.notes} />
          </div>
          </>
        );
    }
}

