import "./Features.scss";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";

const FeatureCard = (item) => {
  return (
    <Col lg="3" className="feature-card d-flex flex-row">
      <div className=" pe-5 align-self-center">
        <span className="rounded-circle p-4 feature-image">
          <Image className="feature-icon" src={item.icon} />
        </span>
      </div>
      <div className=" align-self-center feature-text">
        <p className="fs-6 fw-bold mb-2">{item.title}</p>
        <p className="fs-6">{item.description}</p>
      </div>
    </Col>
  );
};

export default FeatureCard;
