import Container from "react-bootstrap/esm/Container";
import "./ContactInfo.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import ContactUsImage from "../../../assets/contact-us-image.svg";
import { Typography } from "@mui/material";
import icon1 from "../../../assets/geo-alt.svg";
import icon2 from "../../../assets/envelope.svg";
import icon3 from "../../../assets/telephone-outbound.svg";

const ContactInfo = () => {
  return (
    <Container fluid className="pt-5 pb-5">
      <Row>
        <Col lg="5">
          <Image src={ContactUsImage} />
        </Col>
        <Col
          lg="3"
          className="d-flex flex-row justify-content-center align-items-center"
        >
          <Container>
            <Row>
              <Col lg="12" className="text-center pb-3 p-1">
                <Container fluid className="border-bottom">
                  <Row>
                    <Col lg="12" className="pb-3">
                      <Image src={icon1} />
                    </Col>
                    <Col lg="12" className="pb-3">
                      <Typography variant="h-6">
                        djjdjdjdjdjjjjjjjjjdjdj
                      </Typography>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col lg="12" className="text-center pb-3">
                <Container fluid className="border-bottom">
                  <Row>
                    <Col lg="12" className="pb-3">
                      <Image src={icon2} />
                    </Col>
                    <Col lg="12" className="pb-3">
                      <Typography variant="h-6">
                        djjdjdjdjdjjjjjjjjjdjdj
                      </Typography>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col lg="12" className="text-center pb-3">
                <Container fluid className="border-bottom">
                  <Row>
                    <Col lg="12" className="pb-3">
                      <Image src={icon3} />
                    </Col>
                    <Col lg="12" className="pb-3">
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
        <Col lg="4"></Col>
      </Row>
    </Container>
  );
};

export default ContactInfo;
