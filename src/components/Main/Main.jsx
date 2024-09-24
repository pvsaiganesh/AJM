import Companies from "./Companies/Companies";
import ContactInfo from "./ContactInfo/ContactInfo";
import Expert from "./Features/Expert/Expert";
import Features from "./Features/Features";
import Tagline from "./Tagline/Tagline";
import Testimonial from "./Testimonial/Testimonial";

const Main = () => {
  return (
    <div className="main">
      <Tagline />
      <Features />
      <Expert />
      <ContactInfo />
      <Testimonial />
      <Companies />
    </div>
  );
};

export default Main;
