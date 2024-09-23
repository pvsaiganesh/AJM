import "./Companies.scss";
import logo1 from "../../../assets/bb.svg";
import logo2 from "../../../assets/apnaklub.svg";
import logo3 from "../../../assets/centa.svg";
import logo4 from "../../../assets/jaikisan.svg";
import logo5 from "../../../assets/plutus.svg";
import logo6 from "../../../assets/tata.svg";

const Companies = () => {
  return (
    <div className="marquee marquee--6">
      <img
        className="marquee__item"
        src={logo1}
        width="150"
        height="150"
        alt=""
      />
      <img
        className="marquee__item"
        src={logo2}
        width="150"
        height="150"
        alt=""
      />
      <img
        className="marquee__item"
        src={logo3}
        width="150"
        height="150"
        alt=""
      />
      <img
        className="marquee__item"
        src={logo4}
        width="150"
        height="150"
        alt=""
      />
      <img
        className="marquee__item"
        src={logo5}
        width="150"
        height="150"
        alt=""
      />
      <img
        className="marquee__item"
        src={logo6}
        width="150"
        height="150"
        alt=""
      />
      {/* <img
        className="marquee__item"
        src={logo1}
        width="150"
        height="150"
        alt=""
      />
      <img
        className="marquee__item"
        src={logo2}
        width="150"
        height="150"
        alt=""
      /> */}
    </div>
  );
};

export default Companies;
