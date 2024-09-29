import { Button, Typography } from "@mui/material";
import Products from "../../components/Main/Products/Products";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import HomeWrapper from "../HomeWrapper";
import "./ProductPage.scss";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const ProductPage = () => {
  return (
    <HomeWrapper>
      <ProductDetails />
      <Container className="p-0 p-md-5">
        <Typography
          variant="h4"
          className="fs-4 text-start text-md-center fw-bold pb-2"
        >
          Related Products
        </Typography>
        <Products lg="3" />
      </Container>
      <Container className="p-2 p-md-5">
        <Container className="banner-2  m-0 pt-5 pb-5  p-md-2 mt-5 mb-5 rounded">
          <Row className="d-flex flex-column  flex-md-row justify-content-center align-items-center">
            <Col
              xs="12"
              lg="5"
              className="d-flex flex-column text-white align-items-center order-1 order-md-0"
            >
              <Typography variant="p" className="fs-6">
                Summer Sales
              </Typography>
              <Typography variant="p" className="fs-2 fw-bold">
                Iron Iron
              </Typography>
            </Col>
            <Col xs="5" lg="2" className="text-center order-0 order-md-1">
              <p className="d-flex flex-column rounded-circle bg-black pt-4 pb-4">
                <Typography variant="span" className="fs-6 text-grey">
                  Upto
                </Typography>
                <Typography variant="span" className="fs-5 text-orange">
                  50%
                </Typography>
                <Typography variant="span" className="fs-6 text-grey">
                  Off
                </Typography>
              </p>
            </Col>
            <Col xs="12" lg="5" className="text-center text-md-end order-2">
              <Button
                variant="contained"
                size="large"
                className="rounded-pill text-white"
                endIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                }
              >
                Shop now
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </HomeWrapper>
  );
};

export default ProductPage;
