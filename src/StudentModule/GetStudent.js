import { React, useState, useEffect } from "react";
import axios from "axios";
const GetStudents = () => {
  const [students, GetAll] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5198/api/Student/Get_All_Student/")
      .then((response) => {
        
        console.log(response.data); //response.data return json data send by API
        GetAll(response.data); //add response data to students state
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);


  return (
    <div className="table table-primary">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>StudentID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>ClassId</th>
            <th>Section</th>
            <th>Dob</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            const dob = new Date(student.dateOfBirth);
            const formattedDate = dob.toISOString().split('T')[0];
            return (
              <tr key={student.studentId}>
                <td>{student.studentId}</td>
                <td>{student.studentFirstName}</td>
                <td>{student.studentLastName}</td>
                <td>{student.classId}</td>
                <td>{student.section}</td>
                <td>{formattedDate}</td>
                <td>{student.gender}</td>
                <td>{student.studentEmail}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default GetStudents;
