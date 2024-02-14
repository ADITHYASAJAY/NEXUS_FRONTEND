import { React, useState, useEffect } from "react";
 
import axios from "axios";
 
const GetByClass = () => {
    const [cls, GetStudentByClass] = useState([]);
    const [clss,setStudentByClass] =useState('');
    //const [students,setStudents]=useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:5198/api/Student/Get_Student_by_Class/"+ clss)
          .then((response) => {
            console.log(response.data);
            GetStudentByClass(response.data);
          })
          .catch((error) => {
            console.log(error);
           
          });
      },[clss]);
    return (
        <div className="container">
              <h2><center>View Student By Class</center></h2>
        <form >
            <td>Enter The Student Class</td>
        <input
                  type="text"
                  value={clss}
                  onChange={(e) => setStudentByClass(e.target.value)}
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
       
          {/* {cls.map((student) => {
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
          })} */}
          {cls.map((c)=>{
            return(<tr>
            <td>{c.studentId}</td>
            <td>{c.studentFirstName}</td>
            <td>{c.studentLastName}</td>
            <td>{c.classId}</td>
            <td>{c.section}</td>
            <td>{c.dateOfBirth}</td>
            <td>{c.gender}</td>
            <td>{c.studentEmail}</td>
          </tr>)

          })}
           
          
        </tbody>
      </table>
    </div>
    </div>
    );
}
 
export default GetByClass;
