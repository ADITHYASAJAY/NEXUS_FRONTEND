import React, { useState } from "react";
import axios from "axios";
 
function AddStud() {
    const [id, setId] = useState("");
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [std, setStd] = useState("");
    const [section, setSection] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
     //const [phno, setPhoneNo] = useState("");
    //const [subject, setSubject] = useState("");
    const [errors, setErrors] = useState({}); // State to hold validation errors

    // const [id, setId] = useState("");
    // const [fname, setFName] = useState("");
    // const [lname, setLName] = useState("");
    // const [std, setStd] = useState("");
    // const [section, setSection] = useState("");
    // const [dob, setDob] = useState("");
    // const [gender, setGender] = useState("");
    // const [email, setEmail] = useState("");
 
    function validateForm() {
        const errors = {};
        let isValid = true;
 
        if (!id) {
            errors.id = "ID is required";
            isValid = false;
        }
        if (!fname) {
            errors.fname = "First Name is required";
            isValid = false;
        }
        if (!lname) {
            errors.lname = "Last Name is required";
            isValid = false;
        }
        if (!std) {
            errors.std = "Class Id is required";
            isValid = false;
        }
        if (!section) {
            errors.section = "Section is required";
            isValid = false;
        }
        if (!dob) {
            errors.dob = "Date of Birth is required";
            isValid = false;
        }
        if (!gender) {
            errors.gender = "Gender is required";
            isValid = false;
        }
      
        if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid email address";
            isValid = false;
        }
        
        setErrors(errors);
        return isValid;
    }
 
    function Save(event) {
        event.preventDefault(); // Prevent form submission if validation fails
 
        if (validateForm()) {
            const student = {
                studentId: id,
                studentFirstName: fname,
                studentLastName: lname,
                classId: std,
                section: section,
                dateofbirth: dob,
                gender: gender,
               
                studentEmail: email,
              
            };
            
            axios.post("http://localhost:5198/api/Student/Add_Student/", student)
                .then((response) => console.log(response.data))
                .catch((error) => console.log(error));
        }
    }
 
    const Edit = () => {
        let student=
        {
            studentId: id,
            studentFirstName: fname,
            studentLastName: lname,
            classId: std,
            section: section,
            dateofbirth: dob,
            gender: gender,
            studentEmail: email,
        }
        axios
          .put("http://localhost:5198/api/Student/Edit_Student/", student)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error));
    }
 
    const Delete = () => {
        alert("Do you want to delete?")
        axios
          .delete("http://localhost:5198/api/Student/Delete_Student/" + id)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error));
    }
     
    return (
        <div>
            <h2>STUDENT MODULE</h2>
            <form onSubmit={Save}>
                <div className="table-responsive">
                    <table className="table table table-striped-columns">
                        <tbody>
                            <tr>
                                <td>Student Id</td>
                                <td>
                                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                                    {errors.id && <span className="text-danger">{errors.id}</span>}
                                </td>
                            </tr>
                            <tr>
                                <td>First Name</td>
                                <td>
                                    <input type="text" value={fname} onChange={(e) => setFName(e.target.value)} />
                                    {errors.fname && <span className="text-danger">{errors.fname}</span>}
                                </td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>
                                    <input type="text" value={lname} onChange={(e) => setLName(e.target.value)} />
                                    {errors.lname && <span className="text-danger">{errors.lname}</span>}
                                </td>
                            </tr>
                            <tr>
                                <td>Class Id</td>
                                <td>
                                    <input type="text" value={std} onChange={(e) => setStd(e.target.value)} />
                                    {errors.std && <span className="text-danger">{errors.std}</span>}
                                </td>
                            </tr>
                            <tr>
                                <td>Section</td>
                                <td>
                                    <input type="text" value={section} onChange={(e) => setSection(e.target.value)} />
                                    {errors.section && <span className="text-danger">{errors.section}</span>}
                                </td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td>
                                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                                    {errors.dob && <span className="text-danger">{errors.dob}</span>}
                                </td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>
                                    {/* <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} /> */}
                                   

                                    <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    >
                                    <option value="">Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    </select>
                                    {errors.genderr && <span className="text-danger">{errors.genderr}</span>}
                                </td>
                            </tr>
                           
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {errors.email && <span className="text-danger">{errors.email}</span>}
                                </td>
                            </tr>
                          
                        </tbody>
                    </table>
                </div>
                <button type="submit" className="btn btn-primary">Add Student</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-primary" onClick={Edit}>Edit</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-danger" onClick={Delete}>Delete</button>&nbsp;&nbsp;
            </form>
        </div>
    );
}
 
export default AddStud;