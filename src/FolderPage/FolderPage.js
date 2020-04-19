import React, { Component } from 'react';
import FolderList from '../FolderList/FolderList'
import NotesList from '../NotesList/NotesList'
import Nav from '../Nav/Nav'


export default class FolderPage extends Component{
    render(){
        return (
          <div>
            <header className="App-header">
              <Nav />
            </header>
            <div>
              <FolderList folders={this.props.folders} />
              <NotesList Notes={this.props.notes} />
            </div>
          </div>
        );

    }


}