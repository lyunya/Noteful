import React, { Component } from 'react';

class NoteContent extends Component{
    render(){
    return (
      <div className="noteContent">
        <p>
          {this.props.content}
        </p>
      </div>
    );
    }

}

export default NoteContent;