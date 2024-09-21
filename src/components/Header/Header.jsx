import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/AJM.svg";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <header className="header">
      <Container fluid className="pt-3 pb-3">
        <Row>
          <Col xs="4">
            <span className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              Location: Vizag, Andhra Pradesh, India
            </span>
          </Col>
          <Col
            xs="4"
            className="col-4 flex-fill text-orange text-center fw-bold"
          >
            Get a Free Quote
          </Col>
          <Col xs="4" className="col-4 text-end ">
            <span className="me-2 bg-primary rounded-circle p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="16"
                fill="white"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
            </span>
            +91 9550482920
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="d-flex flex-row justify-content-start align-items-center">
          <Col xs="3">
            <Link to="/">
              <Image className="logo" src={Logo} fluid rounded />
            </Link>
          </Col>
          <Col xs="2">
            <Autocomplete
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Search here..." />
              )}
            />
          </Col>

          <Col xs="4">
            <Navbar bg="white" data-bs-theme="light">
              <Container>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">About Us</Nav.Link>
                  <Nav.Link href="#pricing">Blogs</Nav.Link>
                  <Nav.Link href="#pricing">Contact Us</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
      Header
    </header>
  );
};

export default Header;
