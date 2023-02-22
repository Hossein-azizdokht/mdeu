import React from "react";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../assets/img/logo_.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <Navbar bg="light" expand="xl" className="customNav">
        <div className="navWrp">
          <Navbar.Brand href="#">
            <img
              style={{ width: "120px", display: "block", margin: "auto" }}
              src={Logo}
              alt="وزارت آموزش و پرورش"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`expand-xl`} />
          <hr />
          <Navbar.Offcanvas
            id={`expand-xl`}
            aria-labelledby={`expand-xl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`expand-xl`}>منــو</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="menu">
              
                  <Nav.Link as={Link} to="/">
                    <FiMonitor />
                    میزکار
                  </Nav.Link>
               
              
                  <Nav.Link as={Link} to="/plan">
                    <MdOutlineRateReview />
                    نظام برنامه ریزی
                  </Nav.Link>
               
                  <Nav.Link as={Link} to="/t">
                    <MdOutlineRateReview />
                    ارزیابی دوره های ارزیابی
                  </Nav.Link>
               
                  <Nav.Link as={Link} to="/u">
                    <MdOutlineRateReview />
                    تابلوهای اعلانات
                  </Nav.Link>
               
                <hr />
                <Nav.Link as={Link} to="/login">
                  <BiLogOutCircle />
                  خروج از سیستم
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Navbar>
    </>
  );
}

export default Sidebar;
