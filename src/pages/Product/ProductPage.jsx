import { Typography } from "@mui/material";
import Products from "../../components/Main/Products/Products";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import HomeWrapper from "../HomeWrapper";
import "./ProductPage.scss";
import Container from "react-bootstrap/esm/Container";

const ProductPage = () => {
  return (
    <HomeWrapper>
      <ProductDetails />
      <Container className="p-5">
        <Typography variant="h4" className="fs-4 text-center fw-bold">
          Related Products
        </Typography>
        <Products lg="4" />
      </Container>
    </HomeWrapper>
  );
};

export default ProductPage;
