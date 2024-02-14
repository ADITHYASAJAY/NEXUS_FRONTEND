import { React, useState, useEffect } from "react";
 
import axios from "axios";
 
const GetById = () => {
    const [id, GetTeacherBYId] = useState([]);
    const [ids,setTeacherId] =useState("");
    useEffect(() => {
        axios
          .get("http://localhost:5198/api/Teacher/GetTeacherById/"+ ids)
          .then((response) => {
            console.log(response.data);
            GetTeacherBYId([response.data]);
          })
          .catch((error) => {
            console.log(error);
           
          });
      },[ids]);
    return (
        <div className="container">
        <form >
            <td>Enter The Teachers Id</td>
        <input
                  type="text"
                  value={ids}
                  onChange={(e) => setTeacherId(e.target.value)}
                />
               
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
       
          {id.map((teachers) => {
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
    </div>
    );
}
 
export default GetById;
