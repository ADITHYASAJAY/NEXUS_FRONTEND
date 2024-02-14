import { React, useState } from "react";
import axios from "axios";

function AddTeacherj() {

    let [id,setID]=useState(0)
    let [fname,setFirstName]=useState("")
    let [lname,setLastName]=useState("")
    let [dob,setDob]=useState("")
    let [genderr,setGender]=useState("")
    let [phno,setPhoneNo]=useState("")
    let [mail,setEmail]=useState("")
    let [subject,setsubject]=useState("")
   

   


    function Save()
    {
        let teacher=
        {
            teacherId:id,
            teacherFirstName:fname,
            teacherLastName:lname,
            dateofbirth:dob,
            gender:genderr,
            teacherPhoneno:phno,
            teacherEmail:mail,
            subjectTaught:subject,
        }

        axios
        .post("http://localhost:5158/api/Teacher/AddTeacher/",teacher)
        .then((respose)=>
            console.log(respose.data))
        .catch(error=>{
            console.log(error)
        })

    }
    const Edit = () => {
        let teacher=
        {
            teacherId:id,
            teacherFirstName:fname,
            teacherLastName:lname,
            dateofbirth:dob,
            gender:genderr,
            teacherPhoneno:phno,
            teacherEmail:mail,
            subjectTaught:subject,
        }
        axios
          .put("http://localhost:5158/api/Teacher/UpdateTeacher/", teacher)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error));
      }
      const Delete = () => {
        alert("Do you want to delete?")
        axios
          .delete("http://localhost:5158/api/Teacher/DeleteTeacher?id=" + id)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error));
      }
      
    return(
       <div>
        <form onSubmit={Save}>
<div
    class="table-responsive"
>
    
    <table
        class="table table table-striped-columns"
    >
       <span class="border">
        <tbody>
            <tr class="">
               
                <td>Id</td>
                <td><td><input type="text" value={id} onChange={(e)=>setID(e.target.value)} /></td></td>
            </tr>
            <tr class="">
                        <td>First Name</td>
                        <td><input type="text" value={fname}onChange={(e)=>setFirstName(e.target.value)} /></td>
                    </tr>
                    <tr class="">
                        <td>Last Name</td>
                        <td><input type="text" value={lname}onChange={(e)=>setLastName(e.target.value)} /></td>
                    </tr>
                    <tr class="">
                        <td>Date of Birth</td>
                        <td><input type="text" value={dob} onChange={(e)=>setDob(e.target.value)} /></td>
                    </tr>
                    <tr class="">
                        <td>Gender</td>
                        <td><input type="text" value={genderr} onChange={(e)=>setGender(e.target.value)} /></td>
                    </tr>
                    <tr class="">
                        <td>Phone no</td>
                        <td><input type="text" value={phno} onChange={(e)=>setPhoneNo(e.target.value)} /></td>
                    </tr>
                    <tr class="">
                        <td>Email</td>
                        <td><input type="text" value={mail} onChange={(e)=>setEmail(e.target.value)} /></td>
                    </tr>
                    <tr class="">
                        <td>Subject</td>
                        <td><input type="text" value={subject} onChange={(e)=>setsubject(e.target.value)} /></td>
                    </tr>
                    <button type="submit" className="btn btn-primary">AddTeacher</button>
           <a
            name=""
            id=""
            class="btn btn-primary"
            href="#"
            role="button"
            onClick={Edit}
            >Edit</a>
            <button type="button" className="btn btn-danger" onClick={Delete}>
                  Delete
                </button>
               
        </tbody>
        </span>
    </table>
   
</div>
</form>
</div>
       
    );
}
export default AddTeacherj;