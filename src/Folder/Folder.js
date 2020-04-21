import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Folder.css";


export default class Folder extends Component{
    render(){
        return (
            <Link to={`/folder/${this.props.id}`}>
          <li className="Folder" key={this.props.id}>
            {this.props.name}
          </li>
          </Link>
        );
    }


}