import React from "react";
import { getAuth, signOut } from "firebase/auth";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Image,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import darkModeIcon from "../../assets/icons/dark-mode.png";
import './style.css'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import mainIMG from '../../assets/icons/mainlogofinal.png';
import logoutImg from '../../assets/profile/logout.png';
import GitHub from  '../../assets/icons/github-sign.png';


function Navigation(props) {
  // console.log(siteTheme, "siteTheme");
  const navigate=useNavigate()
  const location =useLocation()
  const isLoginPage = location.pathname === "/";

  return (
    !isLoginPage &&(
    <Navbar bg="black" variant="light" expand="lg" style={{color:"white"}} >
      <Container fluid style={{ fontSize: "20px" }}>
        <LinkContainer to="/findJob" style={{ fontSize: "25px" }}>
          <Navbar.Brand href="#"><img className="logo"  src={mainIMG}/></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            {/* <Nav.Link href="/dashboard">Dashboard</Nav.Link> */}
            <Nav.Link href="/aboutus" style={{color:"white"}}>About Us</Nav.Link>
            <Nav title="Link" className="ms-3" id="navbarScrollingDropdown">
            <a href="https://github.com/vedangj72/minor_Projecy" target="_blank" rel="noopener noreferrer">
  <img
    src={GitHub}
    alt="GitHub Logo"
    className="h-5 pt-2"
    style={{ fontSize: "14px", maxHeight: "33px", filter: "invert(1)" }}
  />
</a>

              
            </Nav>
          </Nav>
          {/* <Nav>
          </Nav> */}

          {/* <Form>
            <Form.Check type="switch" variant="dark" />
          </Form> */}
          <div>
            {/* <Image
            className="DarkMode"
              src={darkModeIcon}
              style={{ float: "right", marginRight: "10px" }}
              width={"7%"}
            /> */}
            <img title="Logout" src={logoutImg} variant="dark" style={{ fontSize: "14px" , maxHeight:"45px" , paddingBottom:"5px"}} size="sm" className="DarkMode ms-3"
            onClick={()=>{
              const auth = getAuth();
            signOut(auth).then(() => {
            // 
            console.log("Sign-out successful.")
            navigate("/")
            }).catch((error) => {
            console.log("An error happened.")
          });
            }}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ))
}

export default Navigation;
