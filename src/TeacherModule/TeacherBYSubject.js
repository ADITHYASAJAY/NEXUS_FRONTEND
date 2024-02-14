import { React, useState, useEffect } from "react";
 
import axios from "axios";
 
const GetBySubject = () => {
    const [subject, GetTeacherBYSubject] = useState([]);
    const [sbct,setSubject] =useState("");
    
    useEffect(() => {
        axios
          .get("http://localhost:5198/api/Teacher/GetTeacherBySubject/"+ sbct)
          .then((response) => {
            console.log(response.data);
            GetTeacherBYSubject(response.data);
          })
          .catch((error) => {
            console.log(error);
           
          });



      },[sbct]);



    return (
        <div className="container">
        <form >
            <td>Enter Subject</td>
        <input type="text" value={sbct} onChange={(e) => setSubject(e.target.value)}/>
               
        </form>
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
     
          {subject.map((h) => {
            return (
              <tr key={h.teacherId}>
                
                <td>{h.teacherFirstName}</td>
                <td>{h.teacherLastName}</td>
                <td>{h.teacherEmail}</td>
                <td>{h.dateofbirth}</td>
                <td>{h.gender}</td>
                <td >{h.subjectTaught}</td>
                <td>{h.teacherPhoneno}</td>
              </tr>
            );
          })}
          
        </tbody>
      </table>
    </div>
    </div>
    );
}
 
export default GetBySubject;
