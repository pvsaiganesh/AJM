import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import bannerImg from "../../../assets/banners-image.svg";
import Image from "react-bootstrap/esm/Image";
import "./Banners.scss";
import { Button, Typography } from "@mui/material";

const Banners = () => {
  return (
    <Container fluid="true" className="text-white p-5 rounded banners-shadow">
      <Row>
        <Col lg="4">
          <Container
            fluid
            className="banner-image p-0 d-flex flex-column rounded justify-content-end"
          >
            <Container fluid className="banner-text p-0 text-center rounded">
              <Typography variant="h6" className="text-white p-0 pb-3">
                Best Deals
              </Typography>
              <Typography variant="h5" className="text-white p-0 fw-bold pb-3">
                Sale of the Month
              </Typography>
              <Button
                variant="contained"
                size="small"
                className="rounded-pill bg-light text-orange"
                endIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                }
              >
                Shop now
              </Button>
            </Container>
          </Container>
        </Col>
        <Col lg="4">
          <Container
            fluid
            className="banner-image p-0 d-flex flex-column rounded justify-content-end"
          >
            <Container fluid className="banner-text p-0 text-center rounded">
              <Typography variant="h6" className="text-white p-0 pb-3">
                Best Deals
              </Typography>
              <Typography variant="h5" className="text-white p-0 fw-bold pb-3">
                Sale of the Month
              </Typography>
              <Button
                variant="contained"
                size="small"
                className="rounded-pill bg-light text-orange"
                endIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                }
              >
                Shop now
              </Button>
            </Container>
          </Container>
        </Col>
        <Col lg="4">
          <Container
            fluid
            className="banner-image p-0 d-flex flex-column rounded justify-content-end"
          >
            <Container fluid className="banner-text p-0 text-center rounded">
              <Typography variant="h6" className="text-white p-0 pb-3">
                Best Deals
              </Typography>
              <Typography variant="h5" className="text-white p-0 fw-bold pb-3">
                Sale of the Month
              </Typography>
              <Button
                variant="contained"
                size="small"
                className="rounded-pill bg-light text-orange"
                endIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                }
              >
                Shop now
              </Button>
            </Container>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Banners;
