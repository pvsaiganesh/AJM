import Container from "react-bootstrap/esm/Container";
import "./Description.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Typography } from "@mui/material";
import { YouTubeEmbed } from "react-social-media-embed";
import Image from "react-bootstrap/esm/Image";
import icon1 from "../../../assets/icon1.svg";
import icon2 from "../../../assets/icon2.svg";

const Description = () => {
  return (
    <Container>
      <Row>
        <Col lg="6">
          <Typography variant="p"></Typography>
          Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
          posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
          vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
          porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
          Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
          et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
          scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
          commodo quis, egestas elementum leo. Donec convallis mollis enim.
          Aliquam id mi quam. Phasellus nec fringilla elit. Nulla mauris tellus,
          feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus
          elementum tincidunt, turpis mi viverra velit, pellentesque tristique
          neque mi eget nulla. Proin luctus elementum neque et pharetra.
          <ul className="list-group">
            <li>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ee5124"
                className="bi bi-check-circle-fill me-3"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              An item
            </li>
            <li>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ee5124"
                className="bi bi-check-circle-fill me-3"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              A second item
            </li>
            <li>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ee5124"
                className="bi bi-check-circle-fill me-3"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              A third item
            </li>
            <li>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ee5124"
                className="bi bi-check-circle-fill me-3"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              A fourth item
            </li>
          </ul>
          <Typography variant="p">
            Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
            blandit eros non turpis lobortis iaculis at ut massa.
          </Typography>
        </Col>
        <Col lg="6">
          <Container>
            <YouTubeEmbed
              url="https://www.youtube.com/watch?v=HpVOs5imUN0"
              width="100%"
              height="400px"
            />
          </Container>
          <Container fluid="true" className="p-5">
            <Row className="p-3 border">
              <Col lg="6">
                <Row>
                  <Col lg="2" className="align-self-center">
                    <Image src={icon1} />
                  </Col>
                  <Col lg="10">
                    <Typography className="fw-bold">Discount</Typography>
                    <Typography className="text-reset">
                      Save your 64% money with us
                    </Typography>
                  </Col>
                </Row>
              </Col>
              <Col lg="6">
                <Row>
                  <Col lg="2" className="align-self-center">
                    <Image src={icon2} />
                  </Col>
                  <Col lg="10">
                    <Typography className="fw-bold">Discount</Typography>
                    <Typography className="text-reset">
                      Save your 64% money with us
                    </Typography>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Description;
