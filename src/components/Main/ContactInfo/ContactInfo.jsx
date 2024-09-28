import Container from "react-bootstrap/esm/Container";
import "./ContactInfo.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import ContactUsImage from "../../../assets/contact-us-image.svg";
import { Button, TextField, Typography } from "@mui/material";
import icon1 from "../../../assets/geo-alt.svg";
import icon2 from "../../../assets/envelope.svg";
import icon3 from "../../../assets/telephone-outbound.svg";

const ContactInfo = () => {
  return (
    <Container fluid="true" className="pt-5 pb-5">
      <Row>
        <Col xs="12" md="5">
          <Image loading="lazy" src={ContactUsImage} fluid="true" />
        </Col>
        <Col
          md="2"
          xs="12"
          className="d-flex flex-row justify-content-center align-items-center"
        >
          <Container>
            <Row>
              <Col md="12" className="text-center pb-3 p-1">
                <Container fluid="true" className="border-bottom">
                  <Row>
                    <Col md="12" className="pb-3">
                      <Image loading="lazy" src={icon1} />
                    </Col>
                    <Col md="12" className="pb-3">
                      <Typography variant="h-6">
                        djjdjdjdjdjjjjjjjjjdjdj
                      </Typography>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col md="12" className="text-center pb-3">
                <Container fluid="true" className="border-bottom">
                  <Row>
                    <Col md="12" className="pb-3">
                      <Image loading="lazy" src={icon2} />
                    </Col>
                    <Col md="12" className="pb-3">
                      <Typography variant="h-6">
                        djjdjdjdjdjjjjjjjjjdjdj
                      </Typography>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col md="12" className="text-center pb-3">
                <Container fluid="true" className="border-bottom">
                  <Row>
                    <Col md="12" className="pb-3">
                      <Image loading="lazy" src={icon3} />
                    </Col>
                    <Col md="12" className="pb-3">
                      <Typography variant="h-6">
                        djjdjdjdjdjjjjjjjjjdjdj
                      </Typography>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs="!2" md="5" className="p-5 pt-0 ">
          <Container fluid="true">
            <Typography variant="h5" className="pb-3">
              Contact Us
            </Typography>
            <TextField
              id="filled-basic"
              label="Full Name"
              variant="filled"
              className="pb-3"
              fullWidth
            />
            <TextField
              id="outlined-number"
              label="Phone Number"
              fullWidth
              variant="filled"
              type="number"
              className="pb-3"
              // slotProps={{
              //   inputLabel: {
              //     shrink: true,
              //   },
              // }}
            />
            <TextField
              fullWidth
              variant="filled"
              id="outlined-multiline-static"
              label="Share your message"
              multiline
              className="pb-3"
              rows={4}
              // defaultValue="Default Value"
            />
            <Button
              variant="contained"
              size="large"
              className="rounded-pill"
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
              Submit message
            </Button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInfo;
