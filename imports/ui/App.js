import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Students } from '../api/students.js';
import Student from './Student.js';
 

class App extends Component {
  getStudents() {
    return [
      { _id: 1, name: 'Yasin' },
      { _id: 2, name: 'Clément' },
      { _id: 3, name: 'Mael' },
    ];
  }
 
  renderStudents() {
    return this.props.students.map((student) => (
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

export default withTracker(() => {
    return {
      students: Students.find({}).fetch(),
    };
  })(App);