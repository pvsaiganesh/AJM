import "./Features.scss";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";

const FeatureCard = (item) => {
  return (
    <Col
      xs="12"
      sm="6"
      md="3"
      className="feature-card d-flex flex-row justify-content-center p-3 p-md-0"
    >
      <div className=" pe-5 align-self-center">
        <span className="rounded-circle p-4 feature-image">
          <Image
            loading="lazy"
            className="feature-icon"
            src={item.icon}
            fluid="true"
          />
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
