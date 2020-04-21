import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import MainPage from './MainPage/MainPage';
import FolderPage from './FolderPage/FolderPage';
import NotePage from "./NotePage/NotePage";
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
      folders: [],
    };
  }
  
  getFolderNotes = (folderId) => {
    return this.state.notes.filter(item => item.folderId === folderId)
  }

  getFolder = (noteId) => {
    const note = this.state.notes.find((item) => item.id === noteId);
    return this.state.folders.find(item => item.id === note.folderId)
  }

  getNote = (noteId) => {
    return this.state.notes.find(item => item.id === noteId)
  }

  render(){
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
    }
      return (
        <NotefulContext.Provider value={contextValue}>
          <div className="App">
            <BrowserRouter>
              <Route
                exact
                path="/"
                render={() => (
                  <MainPage
                    folders={this.state.folders}
                    notes={this.state.notes}
                  />
                )}
              />
              <Route
                exact
                path="/folder/:folderId"
                render={({ match }) => (
                  <FolderPage
                    folders={this.state.folders}
                    notes={this.getFolderNotes(match.params.folderId)}
                  />
                )}
              />
              <Route
                exact
                path="/note/:noteId"
                render={({ match }) => (
                  <NotePage
                    folder={this.getFolder(match.params.noteId)}
                    note={this.getNote(match.params.noteId)}
                  />
                )}
              />
            </BrowserRouter>
          </div>
        </NotefulContext.Provider>
      );
  }
}

export default App;
