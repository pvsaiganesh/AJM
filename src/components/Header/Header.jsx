import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/AJM.svg";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Button,
  Autocomplete,
  Input,
  InputAdornment,
  InputBase,
} from "@mui/material";
const Header = () => {
  return (
    <header className="header p-2">
      <Container fluid="true">
        <Row>
          <Col className="order-1 order-lg-0" xs="6" lg="12">
            <Container fluid="true" className="pt-1 pb-1">
              <Row>
                <Col lg="4" className="d-none d-lg-block text-start fw-bold">
                  {/* <span className="me-2">
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
            </span> */}
                  Bulk Order
                </Col>
                <Col
                  xs="12"
                  lg="4"
                  className="text-orange text-center text-lg-center fw-bold"
                >
                  Get a Free Quote
                </Col>
                <Col xs="12" lg="4" className="text-center text-lg-end pe-lg-4">
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
          </Col>
          <Col className="order-0 order-lg-1" xs="6" lg="12">
            <Container fluid="true">
              <Row className="d-flex flex-row justify-content-start align-items-center">
                <Col xs="12" lg="2">
                  <Link to="/">
                    <Image
                      loading="lazy"
                      className="logo"
                      src={Logo}
                      fluid="true"
                      rounded
                    />
                  </Link>
                </Col>
                <Col className="d-none d-lg-block" xs="12" lg="3">
                  <Autocomplete
                    freeSolo
                    variant="solid"
                    className="search-box p-2 pe-3 ps-3 rounded"
                    // onKeyDown={(event) => {
                    //   if (event.key === "Enter") {
                    //     // Prevent's default 'Enter' behavior.
                    //     event.defaultMuiPrevented = true;
                    //     // your handler code
                    //   }
                    // }}
                    options={["Hello", "Hi"]}
                    renderInput={(params) => (
                      <InputBase
                        ref={params.InputProps.ref}
                        {...params}
                        size="small"
                        placeholder="Search here..."
                        startAdornment={
                          <InputAdornment position="start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-search"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                          </InputAdornment>
                        }
                        endAdornment={
                          <InputAdornment position="end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-list"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                              />
                            </svg>
                          </InputAdornment>
                        }
                      >
                        <Input fullWidth className="search-box-input" />
                      </InputBase>
                    )}
                  />
                </Col>

                <Col className="d-none d-lg-block" lg="4">
                  <Navbar data-bs-theme="white">
                    <Container>
                      <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About Us</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                        <Nav.Link href="#contactus">Contact Us</Nav.Link>
                      </Nav>
                    </Container>
                  </Navbar>
                </Col>
                <Col
                  lg="3"
                  className="d-none d-lg-block d-flex flex-column justify-content-end"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-suit-heart me-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-bag me-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                  </svg>
                  <Button variant="contained" size="small" className="me-3">
                    Login/Register
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs="2" className="order-2 d-lg-none" lg="4">
            <svg
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-controls="offcanvasResponsive"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ee5124"
              className="bi bi-list d-lg-none m-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
            <div
              className="offcanvas offcanvas-start d-lg-none"
              tabIndex="-1"
              id="offcanvasResponsive"
              aria-labelledby="offcanvasResponsiveLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#offcanvasResponsive"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About Us</Nav.Link>
                <Nav.Link href="#pricing">Blogs</Nav.Link>
                <Nav.Link href="#contactus">Contact Us</Nav.Link>
              </div>
            </div>
          </Col>
          <Col
            xs="10"
            className="order-3 d-lg-none d-flex flex-row justify-content-center justify-content-md-end"
          >
            <Button variant="contained" className="me-3">
              Login/Register
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
