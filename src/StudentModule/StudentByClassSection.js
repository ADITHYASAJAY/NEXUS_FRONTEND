import { React, useState, useEffect } from "react";
 
import axios from "axios";
 
const GetByClassSection = () => {
    const [cls, GetStudentByClassSection] = useState([]);
    const [clss,setClass] =useState("");
    const [sec,setSection] =useState("");
    useEffect(() => {
        axios
          .get("http://localhost:5198/api/Student/Get_Student_by_Class_And_Section/"+clss+"/"+sec)
          .then((response) => {
            console.log(response.data);
            GetStudentByClassSection(response.data);
          })
          .catch((error) => {
            console.log(error);
           
          });
      },[sec]);
    return (
        <div className="container">
              <h2><center>View Student By Class and Section</center></h2>
        <form >
              <td>Enter The Student Class and Section</td>
            
        <input
                  type="text"
                  value={clss}
                  onChange={(e) => setClass(e.target.value)}
                />
      <input
                  type="text"
                  value={sec}
                  onChange={(e) => setSection(e.target.value)}
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
       
          {cls.map((student) => {
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
 
export default GetByClassSection;








// import { React, useState, useEffect } from "react";
 
// import axios from "axios";
 
// const GetByClassSection = () => {
//     const [cls, GetStudentByClassSection] = useState([]);
//     const [clss,setClass] =useState("");
//     const [sec,setSection] =useState("");
//     useEffect(() => {
//         axios
//           .get(`http://localhost:5198/api/Student/Get_Student_by_Class_And_Section//${clss}/${sec}`)
//           .then((response) => {
//             console.log(response.data);
//             GetStudentByClassSection(response.data);
//           })
//           .catch((error) => {
//             console.log(error);
           
//           });
//       },[clss]);
//     return (
//         <div className="container">
//               <h2><center>View Student By Class and Section</center></h2>
//         <form >
//               <td>Enter The Student Class and Section</td>
            
//         <input
//                   type="text"
//                   value={clss}
//                   onChange={(e) => setClass(e.target.value)}
//                 />
//       <input
//                   type="text"
//                   value={sec}
//                   onChange={(e) => setSection(e.target.value)}
//                 />
               
//         </form>
//         <div className="container">
//       <table className="table table-striped">
//         <thead>
//           <tr>
//           <th>StudentID</th>
//             <th>FirstName</th>
//             <th>LastName</th>
//             <th>ClassId</th>
//             <th>Section</th>
//             <th>Dob</th>
//             <th>Gender</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
       
//           {cls.map((student) => {
//             return (
//             <tr key={student.studentId}>
//                 <td>{student.studentId}</td>
//                 <td>{student.studentFirstName}</td>
//                 <td>{student.studentLastName}</td>
//                 <td>{student.classId}</td>
//                 <td>{student.section}</td>
//                 <td>{student.dateOfBirth}</td>
//                 <td>{student.gender}</td>
//                 <td>{student.studentEmail}</td>
//             </tr>
//             );
//           })}
          
//         </tbody>
//       </table>
//     </div>
//     </div>
//     );
// }
 
// export default GetByClassSection;
