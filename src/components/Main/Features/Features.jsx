import Container from "react-bootstrap/esm/Container";
import { featuresDetails } from "./constants";
import FeatureCard from "./FeatureCard";
import "./Features.scss";
import Row from "react-bootstrap/esm/Row";

const Features = () => {
  return (
    <Container fluid="true">
      <Row>
        {featuresDetails.map((item) => (
          <FeatureCard key={item.id} {...item} />
        ))}
      </Row>
    </Container>
  );
};

export default Features;
