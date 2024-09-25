import { Button, Typography } from "@mui/material";
import "./Products.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/esm/Container";
import PropTypes from "prop-types";

const Product = ({ image, title, price, tagtitle }) => {
  return (
    <Container fluid="true" className="p-2 product-card">
      <Row className="p-2">
        <Col lg="12" className="text-start position-relative">
          <Image src={image} fluid="true" />
          <Typography className="fs-6 position-absolute top-0 bg-orange m-1 p-1 text-white rounded">
            {tagtitle}
          </Typography>
        </Col>
        <Col lg="12" className="text-start">
          <Typography variant="h6" className="text-grey">
            {title}
          </Typography>
        </Col>
        <Col lg="12">
          <Row>
            <Col lg="6" className="text-start">
              ₹{price}
            </Col>
            <Col lg="6" className="text-end">
              <Button variant="contained" size="small">
                Buy Now
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  tagtitle: PropTypes.string,
  price: PropTypes.number,
  children: PropTypes.node,
};

export default Product;
