import React, { useState } from "react";
import axios from "axios";

function AddTeacher() {
    const [id, setID] = useState("");
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [genderr, setGender] = useState("");
    const [phno, setPhoneNo] = useState("");
    const [mail, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [errors, setErrors] = useState({}); // State to hold validation errors

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
        if (!dob) {
            errors.dob = "Date of Birth is required";
            isValid = false;
        }
        if (!genderr) {
            errors.genderr = "Gender is required";
            isValid = false;
        }
        if (!/^[6-9]\d{9}$/.test(phno)) {
            errors.phno = "Invalid phone number";
            isValid = false;
        }
        if (!/\S+@\S+\.\S+/.test(mail)) {
            errors.mail = "Invalid email address";
            isValid = false;
        }
        if (!subject) {
            errors.subject = "Subject is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    function Save(event) {
        event.preventDefault(); // Prevent form submission if validation fails

        if (validateForm()) {
            const teacher = {
                teacherId: id,
                teacherFirstName: fname,
                teacherLastName: lname,
                dateofbirth: dob,
                gender: genderr,
                teacherPhoneno: phno,
                teacherEmail: mail,
                subjectTaught: subject,
            };

            axios.post("http://localhost:5198/api/Teacher/AddTeacher/", teacher)
                .then((response) => console.log(response.data))
                .catch((error) => console.log(error));
        }
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
          .put("http://localhost:5198/api/Teacher/UpdateTeacher/", teacher)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error));
    }

    const Delete = () => {
        alert("Do you want to delete?")
        axios
          .delete("http://localhost:5198/api/Teacher/DeleteTeacher?id=" + id)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error));
    }
     
    return (
        <div>
            <form onSubmit={Save}>
                <div className="table-responsive">
                    <table className="table table table-striped-columns">
                        <tbody>
                            <tr>
                                <td>Id</td>
                                <td>
                                    <input type="text" value={id} onChange={(e) => setID(e.target.value)} />
                                    {errors.id && <span className="text-danger">{errors.id}</span>}
                                </td>
                            </tr>
                            <tr>
                                <td>First Name</td>
                                <td>
                                    <input type="text" value={fname} onChange={(e) => setFirstName(e.target.value)} />
                                    {errors.fname && <span className="text-danger">{errors.fname}</span>}
                                </td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>
                                    <input type="text" value={lname} onChange={(e) => setLastName(e.target.value)} />
                                    {errors.lname && <span className="text-danger">{errors.lname}</span>}
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
                                <select
                                value={genderr}
                                onChange={(e) => setGender(e.target.value)}
                                >
                                <option value="">Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                </select>
                            </td>
                                        
                            </tr>
                            <tr>
                                <td>Phone no</td>
                                <td>
                                    <input type="text" value={phno} onChange={(e) => setPhoneNo(e.target.value)} />
                                    {errors.phno && <span className="text-danger">{errors.phno}</span>}
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input type="text" value={mail} onChange={(e) => setEmail(e.target.value)} />
                                    {errors.mail && <span className="text-danger">{errors.mail}</span>}
                                </td>
                            </tr>
                            <tr>
                                <td>Subject</td>
                                <td>
                                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                    {errors.subject && <span className="text-danger">{errors.subject}</span>}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type="submit" className="btn btn-primary">Add Teacher</button>
                <button type="button" className="btn btn-primary" onClick={Edit}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={Delete}>Delete</button>
            </form>
        </div>
    );
}

export default AddTeacher;