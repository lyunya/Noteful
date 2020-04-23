import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import MainPage from './MainPage/MainPage';
import FolderPage from './FolderPage/FolderPage';
import NotePage from "./NotePage/NotePage";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:9090/folders`)
      .then((resp) => {
        return resp.json();
      })
      .then((folders) => {
        this.setState({ folders });
      });
    fetch(`http://localhost:9090/notes`)
      .then((resp) => {
        return resp.json();
      })
      .then((notes) => {
        this.setState({ notes });
      });
  }

  handleDeleteNote = (noteId) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== noteId),
    });
    
  };

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
    };
    return (
      <NotefulContext.Provider value={contextValue}>
        <div className="App">
          <BrowserRouter>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/folder/:folderId" component={FolderPage} />
            <Route exact path="/note/:noteId" component={NotePage} />
          </BrowserRouter>
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;
