import React, { Component } from 'react';
 
import Student from './Student.js';
 

export default class App extends Component {
  getStudents() {
    return [
      { _id: 1, name: 'Yasin' },
      { _id: 2, name: 'Clément' },
      { _id: 3, name: 'Mael' },
    ];
  }
 
  renderStudents() {
    return this.getStudents().map((student) => (
      <Student key={student._id} student={student} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Student list</h1>
        </header>
 
        <ul>
          {this.renderStudents()}
        </ul>
      </div>
    );
  }
}