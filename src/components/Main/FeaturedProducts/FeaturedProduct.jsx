import "./FeaturedProduct.scss";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Typography } from "@mui/material";
import Col from "react-bootstrap/esm/Col";
// import Products from "../Products/Products";

const FeaturedProduct = () => {
  return (
    <Container fluid className="text-center p-5">
      <Row>
        <Col lg="12">
          <Typography variant="h6" className="text-uppercase text-orange">
            Products
          </Typography>
          <Typography variant="h4" className="text-uppercase">
            Our Featured Products
          </Typography>
        </Col>
        <Col lg="12"></Col>
      </Row>
    </Container>
  );
};

export default FeaturedProduct;
