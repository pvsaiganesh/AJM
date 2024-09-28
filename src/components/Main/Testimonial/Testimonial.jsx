import { Rating, Typography } from "@mui/material";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Testimonial.scss";
import Image from "react-bootstrap/esm/Image";
import invertedComma from "../../../assets/inverted-comma.svg";
import customer from "../../../assets/customer.svg";

const Testimonial = () => {
  return (
    <Container fluid="true" className="p-1 p-md-5 testimonial-bg text-center">
      <Typography variant="h6" className="text-orange">
        Client Testimonial
      </Typography>
      <Typography variant="h4">What our Clients Say</Typography>
      <Row className="pt-5">
        <Col md={{ span: 4, offset: 0 }} className="pb-3">
          <Container
            fluid="true"
            className="p-3 text-start d-flex flex-column bg-white"
          >
            <Typography variant="h-6" className="pb-2">
              <Image loading="lazy" src={invertedComma} />
            </Typography>
            <Typography variant="h-6" className="pb-2">
              The concrete mix was top-notch, providing excellent strength and
              durability. Easy to work with, and the final result was flawless.
              Perfect for any construction project. Highly recommended for
              professionals
            </Typography>
            <Container fluid="true" className="pt-2">
              <Row>
                <Col md="6" className="d-flex flex-row">
                  <Image loading="lazy" src={customer} />
                  <Container>
                    <Typography className="name">Robert</Typography>
                    <Typography className="text-orange">Customer</Typography>
                  </Container>
                </Col>
                <Col md="6" className="text-end">
                  <Rating name="read-only" defaultValue={5} readOnly />
                </Col>
              </Row>
            </Container>
          </Container>
        </Col>
        <Col md={{ span: 4, offset: 0 }} className="pb-3">
          <Container
            fluid="true"
            className="p-3 text-start d-flex flex-column bg-white"
          >
            <Typography variant="h-6" className="pb-2">
              <Image loading="lazy" src={invertedComma} />
            </Typography>
            <Typography variant="h-6" className="pb-2">
              The concrete mix was top-notch, providing excellent strength and
              durability. Easy to work with, and the final result was flawless.
              Perfect for any construction project. Highly recommended for
              professionals
            </Typography>
            <Container className="pt-2">
              <Row>
                <Col md="6" className="d-flex flex-row">
                  <Image loading="lazy" src={customer} />
                  <Container>
                    <Typography className="name">Robert</Typography>
                    <Typography className="text-orange">Customer</Typography>
                  </Container>
                </Col>
                <Col md="6" className="text-end">
                  <Rating name="read-only" defaultValue={5} readOnly />
                </Col>
              </Row>
            </Container>
          </Container>
        </Col>
        <Col md={{ span: 4, offset: 0 }} className="pb-3">
          <Container
            fluid="true"
            className="p-3 text-start d-flex flex-column bg-white"
          >
            <Typography variant="h-6" className="pb-2">
              <Image loading="lazy" src={invertedComma} />
            </Typography>
            <Typography variant="h-6" className="pb-2">
              The concrete mix was top-notch, providing excellent strength and
              durability. Easy to work with, and the final result was flawless.
              Perfect for any construction project. Highly recommended for
              professionals
            </Typography>
            <Container className="pt-2">
              <Row>
                <Col md="6" className="d-flex flex-row">
                  <Image loading="lazy" src={customer} />
                  <Container>
                    <Typography className="name">Robert</Typography>
                    <Typography className="text-orange">Customer</Typography>
                  </Container>
                </Col>
                <Col md="6" className="text-end">
                  <Rating name="read-only" defaultValue={5} readOnly />
                </Col>
              </Row>
            </Container>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
