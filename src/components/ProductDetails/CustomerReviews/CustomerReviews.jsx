import Container from "react-bootstrap/esm/Container";
import "./CustomerReviews.scss";
import Row from "react-bootstrap/esm/Row";
import ReviewCard from "./ReviewCard";
import { Button } from "@mui/material";
import Col from "react-bootstrap/esm/Col";

const CustomerReviews = () => {
  return (
    <Container fluid="true" className="p-5">
      <Row>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <Col>
          <Button variant="contained">Load More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerReviews;
