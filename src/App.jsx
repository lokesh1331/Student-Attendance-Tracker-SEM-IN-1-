import React from 'react';
function Student(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>ID: {props.id}</p>
      <p>Course: {props.course}</p>
      <p>Attendance: {props.attendance}%</p>
    </div>
  );
}
export default function App() {
  return (
    <Student
      name="Lokesh"
      id="101"
      course="ECE"
      attendance="90"
    />
  );
}
