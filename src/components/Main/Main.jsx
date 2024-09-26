import Banners from "./Banners/Banners";
import Category from "./Category/Category";
import Companies from "./Companies/Companies";
import ContactInfo from "./ContactInfo/ContactInfo";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import FeaturedProducts2 from "./FeaturedProducts/FeaturedProducts2";
import Expert from "./Features/Expert/Expert";
import Features from "./Features/Features";
import Tagline from "./Tagline/Tagline";
import Testimonial from "./Testimonial/Testimonial";

const Main = () => {
  return (
    <div className="main">
      <Tagline />
      <Features />
      <Category />
      <Expert />
      <FeaturedProducts />
      <FeaturedProducts2 />
      <Banners />
      <ContactInfo />
      <Testimonial />
      <Companies />
    </div>
  );
};

export default Main;
