import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import bannerImg from "../../../assets/banners-image.svg";
import Image from "react-bootstrap/esm/Image";
import "./Banners.scss";

const Banners = () => {
  return (
    <Container fluid="true" className="text-white p-5 rounded">
      <Row>
        <Col lg="4">
          <Image src={bannerImg} fluid="true" />
        </Col>
        <Col lg="4">
          <Image src={bannerImg} fluid="true" />
        </Col>
        <Col lg="4">
          <Image src={bannerImg} fluid="true" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banners;
