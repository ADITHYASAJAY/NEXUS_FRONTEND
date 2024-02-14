import React, { useState, useEffect } from "react";
import axios from "axios";
const AddStudent = () => {
  const [id, setId] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [std, setStd] = useState("");
  const [section, setSection] = useState("");
  const [dob, setDob] = useState("");
  const [classId, setClassId] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [classes, getClasses] = useState([]);
  useEffect(() => {
    axios
        .get("http://localhost:5198/api/ClassSchedule/GetAllClass")
        .then((response) => {
            console.log(response.data);
            getClasses(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);
  const Save = (e) => {
    e.preventDefault();
    let student = {
    studentId: id,
    studentFirstName: fname,
    studentLastName: lname,
    classId: classId,
    section: section,
    dateOfBirth:dob,
    gender:gender,
    studentEmail:email
    };
    console.log(student);
    axios
      .post("http://localhost:5198/api/Student/Add_Student/",student)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  const Search = () => {
    axios
      .get("http://localhost:5198/api/Student/Get_All_Student/" + id)
      .then((response) => {
        console.log(response.data);
        setFName(response.data.name);
        setLName(response.data.name);
        setStd(response.data.std);
        setSection(response.data.section);
      })
      .catch((error) => console.log(error));
  };
  const Edit = () => {
    let student = {
      StudentId: id,
      StudentFirstName: fname,
      StudentLastName: lname,
      Std: std,
      Section: section,
    };
    axios
      .put("http://localhost:5198/api/Student/Edit_Student/", student)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  const handleClassChange = (event) => {
    setClassId(event.target.value);
};
  const Delete = (e) => {
    e.preventDefault();
    axios
      .delete("http://localhost:5198/api/Student/Delete_Student//" + id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <form onSubmit={Save}>
      <center><h2>STUDENT MODULE</h2></center><br/><br/><br/>
        <table className="table table striped" >
      
          <tbody >
            
            <tr>
              <td>StudentId</td>
              <td>
                <input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>FirstName</td>
              <td>
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => setFName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>LastName</td>
              <td>
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => setLName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
            <td>classId</td>
                      <td>
                          <select
                              id="classId"
                              className="form-control"
                              value={classId}
                              onChange={handleClassChange}
                              required
                          >
                              <option value="">Select a Class</option>
                              {classes.map((classInfo) => (
                                  <option key={classInfo.class_Id} value={classInfo.class_Id}>
                                      {`${classInfo.className} - ${classInfo.section} (${classInfo.class_Id})`}
                                  </option>
                              ))}
                          </select>
                          
                      </td>
            </tr>
            <tr>
              <td>Section</td>
              <td>
                <input
                  type="text"
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Dob</td>
              <td>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>
                    <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select>
                </td>
                </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="submit" class="btn btn-primary" onClick={Save}>
                  Add</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-info" onClick={Search}>
                  Search
                </button>&nbsp;&nbsp;
                <button type="button" class="btn btn-secondary" onClick={Edit}>
                  Edit
                </button>&nbsp;&nbsp;
                <button type="button" class="btn btn-danger" onClick={Delete}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        
        </table>
      </form><br/><br/><br/>
    </div>
  );
};
export default AddStudent;

// {/* <div className="email-form">
// <h1>COMMUNICATION </h1><br/><br/>

// <form onSubmit={Save}>
//   <label htmlFor="email" >NotificationId</label>
//   <input type="text"



//   /><br/><br/>
//   <label htmlFor="message">Message</label>
//   <textarea
//     placeholder="Enter your message here..."
//   //   value={msg}
//     name="message"

//   /><br/><br/>
//   <label htmlFor="email" spacing={4}> date</label>
//   <input
//   //   value={dat}

//   /><br/><br/>
//   <div value={rol}>
//     {/* <h1>Select Recipients   </h1> */}
//     <label htmlFor="message">Select Recipients</label>
//     <label className="container1">Teacher
//       <input type="checkbox" value="teacher"  />
//       <span className="checkmark"></span>
//     </label>
//     <label className="container1">Students
//       <input type="checkbox" value="students" />
//       <span className="checkmark"></span>
//     </label>
//     <label className="container1">Users
//       <input type="checkbox" value="AllUsers"  />
//       <span className="checkmark"></span>
//     </label>
//   </div><br/><br/>
//   <button type="submit">
//     Send Message
//   </button>
// </form>
// </div> */}






// import { React, useState } from "react";
// import axios from "axios";
 
// function AddStudent() {
 
//     let [id,setID]=useState(0)
//     let [fname,setFirstName]=useState("")
//     let [lname,setLastName]=useState("")
//     let [std,setStd]=useState("")
//     let [section,setSection]=useState("")
//     let [dob,setDob]=useState("")
//     let [gender,setGender]=useState("")
//     let [email,setEmail]=useState("")
  
//   function Save()
//     {
//         let student=
//         {
//                 StudentId: id,
//                 StudentFirstName: fname,
//                 StudentLastName: lname,
//                 ClassId: std,
//                 Section: section,
//                 DateOfBirth:dob,
//                 Gender:gender,
//                 StudentEmail:email
//         }
 
//         axios
//         .post("http://localhost:5244/api/Student/Add_Student/", student)
//         .then((respose)=>
//             console.log(respose.data))
//         .catch(error=>{
//             console.log(error)
//         })
 
//     }
//     return(
//        <div>
//         <form onSubmit={Save}>
// <div
//     class="table-responsive"
// >
   
//     <table
//         class="table table-primary"
//     >
       
//         <tbody>
//             <tr class="">
               
//                 <td>Id</td>
//                 <td><td><input type="text" value={id} onChange={(e)=>setID(e.target.value)} /></td></td>
//             </tr>
//             <tr class="">
//                         <td>First Name</td>
//                         <td><input type="text" value={fname}onChange={(e)=>setFirstName(e.target.value)} /></td>
//                     </tr>
//                     <tr class="">
//                         <td>Last Name</td>
//                         <td><input type="text" value={lname}onChange={(e)=>setLastName(e.target.value)} /></td>
//                     </tr>
//                     <tr class="">
//                         <td>ClassId</td>
//                         <td><input type="text" value={std}onChange={(e)=>setStd(e.target.value)} /></td>
//                     </tr>
//                     <tr class="">
//                         <td>Section</td>
//                         <td><input type="text" value={section}onChange={(e)=>setSection(e.target.value)} /></td>
//                     </tr>
//                     <tr class="">
//                         <td>Date of Birth</td>
//                         <td><input type="text" value={dob} onChange={(e)=>setDob(e.target.value)} /></td>
//                     </tr>
//                     <tr class="">
//                         <td>Gender</td>
//                         <td><input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} /></td>
//                     </tr>
//                     <tr class="">
//                         <td>Email</td>
//                         <td><input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} /></td>
//                     </tr>
                  
//                  <button type="Submit">Add Student</button>
           
//         </tbody>
//     </table>
   
// </div>
// </form>
// </div>
       
//     );
// }
// export default AddStudent;









