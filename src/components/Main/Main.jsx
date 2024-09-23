import Expert from "./Features/Expert/Expert";
import Features from "./Features/Features";
import Tagline from "./Tagline/Tagline";
import Testimonial from "./Testimonial/Testimonial";

const Main = () => {
  return (
    <div className="main">
      <Tagline />
      <Features />
      <Testimonial />
      <Expert />
    </div>
  );
};

export default Main;
