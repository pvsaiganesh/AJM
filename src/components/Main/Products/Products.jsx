import { Container } from "@mui/material";
import Row from "react-bootstrap/esm/Row";
import Product from "./Product";
import Col from "react-bootstrap/esm/Col";
import { products } from "./products";

const Products = () => {
  return (
    <Container>
      <Row>
        {products.map((product) => {
          return (
            <Col lg="3" key={product.id} className="p-2">
              <Product {...product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
