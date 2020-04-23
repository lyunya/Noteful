import React, { Component } from "react";
import Folder from '../Folder/Folder'
import "./FolderList.css";

class FolderList extends Component{
    render(){
        return (
          <>
            <section className="folderList">
              <ul className="orderedList">
                {this.props.folders.map((folder) => (
                  <Folder key={folder.id} id={folder.id} name={folder.name} />
                ))}
              </ul>
              <button className="addFolder">Add Folder</button>
            </section>
          </>
        );
    }
}

export default FolderList;