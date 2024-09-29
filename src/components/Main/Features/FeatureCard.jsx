import "./Features.scss";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";

const FeatureCard = (item) => {
  return (
    <Col
      xs="12"
      sm="6"
      lg="3"
      className="feature-card d-flex flex-row justify-content-start justify-content-lg-center mb-1 p-3 ps-0 pe-0 "
    >
      <div className="p-2 ps-lg-3 pe-lg-5 align-self-center">
        <span className="rounded-circle p-2 feature-image">
          <Image
            loading="lazy"
            className="feature-icon"
            src={item.icon}
            fluid="true"
          />
        </span>
      </div>
      <div className=" align-self-center feature-text text-start text-wrap text-break text-wrapping">
        <span className="fs-6 fw-bold mb-2 ">{item.title}</span>
        <br />
        <span className="fs-6">{item.description}</span>
      </div>
    </Col>
  );
};

export default FeatureCard;
