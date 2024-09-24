import Container from "react-bootstrap/esm/Container";
import "./Footer.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Logo from "../../assets/AJM.svg";
import Image from "react-bootstrap/esm/Image";
import "./Footer.scss";

const Footer = () => {
  return (
    <Container className="footer-bg" fluid>
      <Row>
        <Col lg="12" className="text-center">
          <Image src={Logo} fluid thumbnail height="350px" width="350px" />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
