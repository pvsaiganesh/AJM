import Container from "react-bootstrap/esm/Container";
import "./Category.scss";
import Row from "react-bootstrap/esm/Row";
import { Typography } from "@mui/material";
import Col from "react-bootstrap/esm/Col";
import Products from "../Products/Products";

const Category = () => {
  return (
    <Container fluid="true" className="text-center p-5">
      <Row>
        <Col lg="12">
          <Typography variant="h6" className="text-uppercase text-orange">
            Category
          </Typography>
          <Typography variant="h4" className="text-uppercase">
            Shop by Top Categories
          </Typography>
        </Col>
        <Col lg="12">
          <Products />
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
