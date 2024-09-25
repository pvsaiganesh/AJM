import { Container } from "@mui/material";
import "./Products.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";

const Product = (props) => {
  const { image, title, price, tagtitle } = props;
  return (
    <Container fluid>
      <Row className="text-center">
        <Col lg="12">
          <Image src={image} fluid />
          Hello
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
