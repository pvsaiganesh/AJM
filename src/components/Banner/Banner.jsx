import Container from "react-bootstrap/esm/Container";
import "./Banner.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import bannerImg from "../../assets/banner-image.svg";
import { Button } from "@mui/material";
import Image from "react-bootstrap/esm/Image";

const Banner = () => {
  return (
    <div className="banner text-white p-5 rounded">
      <Container>
        <Row>
          <Col>
            <p className="fs-1">Building & Construction Materials</p>
            <p className="fs-4 border-right ps-3">
              One Stop Construction materials store for all type of
              constructions{" "}
            </p>
            <Button
              variant="contained"
              size="large"
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
          </Col>
          <Col>
            <Image src={bannerImg} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
