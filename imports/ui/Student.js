import React, { Component } from 'react';
import { Students } from '../api/students.js';

export default class Student extends Component {
//   editStudent() {
//     Students.update({name: document.getElementById('render-target').value});
//   }
 
  deleteThisStudent() {
    Students.remove(this.props.student._id);
  }

  render() {
    const studentClassName = this.props.student.checked ? 'checked' : '';  
    return (
        <li className={studentClassName}>
        <button className="delete" onClick={this.deleteThisStudent.bind(this)}>
          &times;
        </button>

        <span className="text">{this.props.student.name}</span>    
      </li>
    );
  }
}