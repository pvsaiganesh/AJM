import "./Features.scss";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";

const FeatureCard = (item) => {
  return (
    <Col lg="3" className="d-flex flex-row">
      <div className="pt-5 pe-5 align-self-center">
        <span className="rounded-circle bg-grey p-4">
          <Image src={item.icon} />
        </span>
      </div>
      <div className="pt-5 align-self-center">
        <p className="fs-6 fw-bold mb-2">{item.title}</p>
        <p className="fs-6">{item.description}</p>
      </div>
    </Col>
  );
};

export default FeatureCard;
