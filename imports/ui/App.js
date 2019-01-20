import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Students } from '../api/students.js';
import Student from './Student.js';
import ReactDOM from 'react-dom';
 

class App extends Component {
   handleSubmit(event) {
    event.preventDefault();

    const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();
 
    Students.insert({
      name,
      createdAt: new Date(),
    });
 
    ReactDOM.findDOMNode(this.refs.nameInput).value = '';
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

          <form className="new-student" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="nameInput"
              placeholder="Type to add new students"
            />
          </form>

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