import Container from "react-bootstrap/esm/Container";
import "./FeaturedProducts.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Typography } from "@mui/material";
import FeaturedSectionCard from "./FeaturedSectionCard";
import { PropTypes } from "prop-types";

const FeaturedSection = ({ title }) => {
  return (
    <Container>
      <Row>
        <Col lg="12">
          <Typography variant="h6">{title}</Typography>
        </Col>
        <Col lg="12">
          <FeaturedSectionCard />
        </Col>

        <Col lg="12">
          <FeaturedSectionCard />
        </Col>

        <Col lg="12">
          <FeaturedSectionCard />
        </Col>
      </Row>
    </Container>
  );
};

FeaturedSection.propTypes = {
  title: PropTypes.string,
};

export default FeaturedSection;
