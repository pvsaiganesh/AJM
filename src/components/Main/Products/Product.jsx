import { Button, Typography } from "@mui/material";
import "./Products.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/esm/Container";

const Product = (props) => {
  const { image, title, price, tagtitle } = props;
  return (
    <Container fluid className="p-2 product-card">
      <Row className="p-2">
        <Col lg="12" className="text-start">
          <Image src={image} />
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

export default Product;
