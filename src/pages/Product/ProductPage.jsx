import { Typography } from "@mui/material";
import Products from "../../components/Main/Products/Products";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import HomeWrapper from "../HomeWrapper";
import "./ProductPage.scss";

const ProductPage = () => {
  return (
    <HomeWrapper>
      <ProductDetails />
      <Typography variant="h4" className="fs-4 text-center fw-bold">
        Related Products
      </Typography>
      <Products />
    </HomeWrapper>
  );
};

export default ProductPage;
