import React, { Component } from 'react';
 
export default class Student extends Component {
  render() {
    return (
      <li>{this.props.student.name}</li>
    );
  }
}