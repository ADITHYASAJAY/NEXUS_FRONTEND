import { React, useState, useEffect } from "react";
 
import axios from "axios";
 
const GetByClassId = () => {
    const [id, GetTeacherBYId] = useState([]);
    const [ids,setTeacherId] =useState("");
    useEffect(() => {
        axios
          .get("http://localhost:5198/api/Teacher/GetTeacherByClassid/"+ ids)
          .then((response) => {
            console.log(response.data);
            GetTeacherBYId(response.data);
          })
          .catch((error) => {
            console.log(error);
           
          });
      },[ids]);
    return (
        <div className="container">
        <form >
            <label>Enter Class ID</label>
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
            <th>Teacher Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Subject Teaching</th>
            
          </tr>
        </thead>
        <tbody>
       
          {id.map((teachers) => {
            return (
              <tr key={teachers.teacherId}>
                <td>{teachers.teacherId}</td>
                <td>{teachers.teacherFirstName}</td>
                <td>{teachers.teacherLastName}</td>
                <td>{teachers.subjectTaught}</td>
                
              </tr>
            );
          })}
          
        </tbody>
      </table>
    </div>
    </div>
    );
}
 
export default GetByClassId;
