import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../images/2030Black.png";
import logo1 from "../../images/logo1.png";

import "./style.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Navbar bg="white" className="Text">
        <Container>
          <Navbar.Brand>
            <img src={logo1} id="logoBlog" alt="imageBlog" />
            <b id="blog">blog</b>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="Buttons Text">
              <Link to="/"> Home</Link>

              <RiArrowDropDownLine />
            </Nav.Link>
            <Nav.Link className="Buttons Text">
              News <RiArrowDropDownLine />
            </Nav.Link>
            <Nav.Link className="Buttons Text">More</Nav.Link>
          </Nav>

          <Navbar.Brand>
            <MdOutlineDarkMode />
          </Navbar.Brand>
          <Navbar.Brand className="Buttons">العربية</Navbar.Brand>
          <Navbar.Brand>
            <img
              src={logo}
              width="70"
              height="50"
              alt="logo2030"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
