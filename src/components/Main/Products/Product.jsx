import { Container } from "@mui/material";
import "./Products.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";

const Product = (props) => {
  const { image, title, price, tagtitle } = props;
  return (
    <Container>
      <Row>
        <Col lg="12">
          <Image src={image} />
          Hello
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
