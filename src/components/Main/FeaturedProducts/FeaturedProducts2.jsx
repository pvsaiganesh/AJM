import Container from "react-bootstrap/esm/Container";
import "./FeaturedProducts.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Typography } from "@mui/material";
import FeaturedSection from "./FeaturedSection";

const FeaturedProducts2 = () => {
  return (
    <Container>
      <Row>
        <Col xs="12" lg="3">
          <FeaturedSection title="Deals" />
        </Col>
        <Col xs="12" lg="3">
          <FeaturedSection title="Deals" />
        </Col>
        <Col xs="12" lg="3">
          <FeaturedSection title="Deals" />
        </Col>
        <Col xs="12" lg="3">
          <Container
            fluid
            className="banner-side-image-1 p-0 d-flex flex-column rounded justify-content-start"
          >
            <Container fluid className="p-3 text-center rounded">
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

export default FeaturedProducts2;
