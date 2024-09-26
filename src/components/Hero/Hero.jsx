import Container from "react-bootstrap/esm/Container";
import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import "./Hero.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Hero = () => {
  return (
    <div className="hero">
      <Container fluid="true">
        <Row>
          <Col className="p-2 d-none d-md-block" lg="3">
            <Menu />
          </Col>
          <Col xs="12" className="p-2" lg="9">
            <Banner />
          </Col>
        </Row>
      </Container>
      {/* <p className="bg-white  pt-2 pb-2 text-center text-grey">
        One Stop Construction materials store for all type of constructions One
        Stop Construction materials store for all type of constructions{" "}
      </p> */}
    </div>
  );
};

export default Hero;
