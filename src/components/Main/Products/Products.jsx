import Row from "react-bootstrap/esm/Row";
import Product from "./ProductCard";
import Col from "react-bootstrap/esm/Col";
import { productsInfo } from "./products-constants";
import { PropTypes } from "prop-types";
import Container from "react-bootstrap/esm/Container";

export const Products = ({ lg, children }) => {
  // console.log(children);
  return (
    <Container fluid="true">
      <Row>
        {children}
        {productsInfo.map((product) => {
          return (
            <Col
              xs="12"
              sm="6"
              lg={lg ? lg : "3"}
              key={product.id}
              className="p-2"
            >
              <Product {...product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
Products.propTypes = {
  lg: PropTypes.string,
  children: PropTypes.instanceOf(Object),
};

export default Products;
