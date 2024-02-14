import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container ,Button} from 'react-bootstrap';
import Footer from "../Home/Footer";

const StudentDashboard = () => {
  const UserName = sessionStorage.getItem("uname");
  console.log(UserName);
  const PersonalId = sessionStorage.getItem("personalid");
  

  return (
    <div>
      <header>
      <Navbar expand="lg" fixed="top" className="bg-dark" variant="dark"  >
      <Container>
        <Navbar.Brand  style={{color:"red" ,fontFamily:"monospace" }}>
          <h1>NEXUS UNIVERSITY</h1></Navbar.Brand>
      </Container>
      <Button variant="outline-danger"><Link to="/signup" className='l'>LogOut</Link></Button>
      
    </Navbar>
      </header>
      
      <main>
      
        <div className="dashboard1">
          <div className="left1">
            <span style={{color:"red"}}>Hello {UserName}</span><br></br>
          <Link to="show-marks"className='l'>ShowMarks</Link>
          <br></br>
          <Link to="take-exam" className='l'>TakeExam</Link>
          <br></br> 
            <Link to="studentattendancebyid" className='l'>AttendanceById</Link>
            <br></br>
            <Link to="studentattendancebymonth" className='l'>AttendanceByMonth</Link>
            <br></br>
            <Link to="examsdetails" className='l'>ExamDetails</Link>
            <br></br>
            <Link to="examsdetailsstudent" className='l'>ExamDetailsById</Link>
            <br></br>
          </div>
          <div className="right1">
            <Outlet />
          </div>
        </div>
        
      </main>
      <Footer/>
    </div>
  );
};
export default StudentDashboard;
