import { Container } from "@mui/material";
import Row from "react-bootstrap/esm/Row";
import Product from "./ProductCard";
import Col from "react-bootstrap/esm/Col";
import { productsInfo } from "./products-constants";

export const Products = () => {
  return (
    <Container fluid="true">
      <Row>
        {productsInfo.map((product) => {
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
