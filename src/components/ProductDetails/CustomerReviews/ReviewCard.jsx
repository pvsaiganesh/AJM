import { Container, Rating, Typography } from "@mui/material";
import "./CustomerReviews.scss";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import reviewImg from "../../../assets/review.svg";

const ReviewCard = () => {
  return (
    <Col lg="12">
      <Container fluid="true" className="shadow p-3 mb-2">
        <Row>
          <Col lg="12">
            <Container fluid="true">
              <Row>
                <Col lg="1" className="align-self-center">
                  <Image src={reviewImg} />
                </Col>
                <Col lg="2">
                  <Col lg="12">
                    <Typography variant="span" className="fw-bold">
                      Naidu
                    </Typography>
                  </Col>
                  <Col lg="12">
                    <Rating sx={{ width: "100px" }} value={5} readOnly />
                  </Col>
                </Col>
                <Col lg="9" className="text-end">
                  <Typography className="tet-reset">20m</Typography>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg="12">
            <Typography>Duis at ullamcorper nulla, eu dictum eros.</Typography>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default ReviewCard;
