import { React, useState, useEffect } from "react";
 
import axios from "axios";
 
const GetById = () => {
    const [id, GetStudentById] = useState([]);
    const [ids,setStudentById] =useState("");
    useEffect(() => {
        axios
          .get("http://localhost:5198/api/Student/Get_Student_by_Id/"+ ids)
          .then((response) => {
            console.log(response.data);
            GetStudentById([response.data]);
          })
          .catch((error) => {
            console.log(error);
           
          });
      },[ids]);
    return (
        <div className="container">
            <h2><center>View Student By Id</center></h2>
        <form >
            <td>Enter The Student Id</td>
        <input
                  type="text"
                  value={ids}
                  onChange={(e) => setStudentById(e.target.value)}
                />
               
        </form>
        <div className="container">
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
       
          {id.map((student) => {
            return (
                <tr key={student.studentId}>
                <td>{student.studentId}</td>
                <td>{student.studentFirstName}</td>
                <td>{student.studentLastName}</td>
                <td>{student.classId}</td>
                <td>{student.section}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.gender}</td>
                <td>{student.studentEmail}</td>
              </tr>
            );
          })}
          
        </tbody>
      </table>
    </div>
    </div>
    );
}
 
export default GetById;
