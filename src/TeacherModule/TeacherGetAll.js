import { React, useState, useEffect } from "react";
import axios from "axios";
const Teachers = () => {
  const [teacher, GetAll] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5198/api/Teacher/GetAll")
      .then((response) => {
        console.log(response.data);
        GetAll(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>SubjectTaught</th>
            <th>Phone NO</th>
          </tr>
        </thead>
        <tbody>
     
          {teacher.map((teachers) => {
            return (
              <tr key={teachers.teacherId}>
                <td>{teachers.teacherFirstName}</td>
                <td>{teachers.teacherLastName}</td>
                <td>{teachers.teacherEmail}</td>
                <td>{teachers.dateofbirth}</td>
                <td>{teachers.gender}</td>
                <td>{teachers.subjectTaught}</td>
                <td>{teachers.teacherPhoneno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Teachers;