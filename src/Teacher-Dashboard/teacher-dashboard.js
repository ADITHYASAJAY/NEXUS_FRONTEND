import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container ,Button} from 'react-bootstrap';
import Footer from "../Home/Footer";
const TeacherDashboard = () => {
  const UserName = sessionStorage.getItem("uname");
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
            <Link to="schedule-exam" className='l'>ScheduleExam</Link>
            <br></br>
            <Link to='addmarks' className='l'>AddMark</Link> 
            <br></br>
            <Link to='marksofclass' className='l'>ViewClassResult</Link> 
            <br></br>
            <Link to='studentattendance' className="l">StudentAttendance</Link>
            <br></br>
            <Link to='teacherattendancebyid' className="l">AttendanceById</Link>
            <br></br>
            <Link to='teacherattendancebymonth' className="l">AttendanceByMonth</Link>
            <br></br>
            <Link to='classschedulebyid' className="l">ClassScheduleById</Link>
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
export default TeacherDashboard;
