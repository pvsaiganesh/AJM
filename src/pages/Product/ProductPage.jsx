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
        <Products lg="4" />
        <Container className="banner-2  p-5 mt-5">
          <Row>
            <Col
              lg="5"
              className="d-flex flex-column text-white align-items-center"
            >
              <Typography variant="p" className="fs-6">
                Summer Sales
              </Typography>
              <Typography variant="p" className="fs-2 fw-bold">
                Iron Iron
              </Typography>
            </Col>
            <Col lg="2" className="text-center">
              <span className="d-flex flex-column rounded-circle bg-black p-3  align-items-center">
                <Typography variant="span" className="fs-6 text-grey">
                  Upto
                </Typography>
                <Typography variant="span" className="fs-5 text-orange">
                  50%
                </Typography>
                <Typography variant="span" className="fs-6 text-grey">
                  Off
                </Typography>
              </span>
            </Col>
            <Col lg="5" className="text-end">
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
