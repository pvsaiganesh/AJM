import { Button, Typography } from "@mui/material";
import "./Products.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/esm/Container";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ image, title, price, tagtitle, id }) => {
  return (
    <Container fluid="true" className="p-2 product-card">
      <Row className="p-1 p-lg-1 text-center text-lg-start">
        <Col xs="12" lg="12" className=" position-relative">
          <Image loading="lazy" src={image} fluid="true" className="w-100" />
          <Typography className="fs-6 position-absolute top-0 bg-orange m-1 p-1 text-white rounded">
            {tagtitle}
          </Typography>
        </Col>
        <Col xs="12" lg="12" className="text-lg-start pt-3 pb-3">
          <Typography variant="h6" className="text-grey">
            {title}
          </Typography>
        </Col>
        <Col xs="12" lg="12" className="text-start text-lg-start">
          <Row>
            <Col xs="4" lg="4" className="text-start">
              ₹{price}
            </Col>
            <Col xs="8" lg="8" className="text-end text-lg-end">
              <Link to={`/${id}`}>
                <Button variant="contained" size="small">
                  Buy Now
                </Button>
              </Link>
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
  id: PropTypes.number,
};

export default Product;
