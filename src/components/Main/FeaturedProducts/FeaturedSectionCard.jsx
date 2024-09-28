import Container from "react-bootstrap/esm/Container";
import "./FeaturedProducts.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import image from "../../../assets/small-image.svg";
import Image from "react-bootstrap/esm/Image";
import { Rating, Typography } from "@mui/material";

const FeaturedSectionCard = () => {
  return (
    <Container className="shadow mb-3">
      <Row className="d-flex flex-row justify-content-between">
        <Col xs="4" lg="6" className="p-2">
          <Image loading="lazy" src={image} />
        </Col>
        <Col xs="8" lg="6" className="align-self-center">
          <Typography className="fs-6">Sands</Typography>
          <Typography className="fs-6">₹ 1500</Typography>
          <Rating readOnly value={5} size="small" />
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedSectionCard;
