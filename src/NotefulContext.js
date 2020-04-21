import React from 'react';

const NotefulContext = React.createContext({
  notes: [],
  folders: [],
  deleteNote: () => {},
  getFolderNotes: () => {},
  getFolder: () => {},
  getNote: () => {},
});

export default NotefulContext;