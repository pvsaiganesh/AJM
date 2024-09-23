import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main/Main";
import Testimonial from "../components/Testimonial/Testimonial";
import "./Home.scss";

const Home = () => {
  return (
    <div className="homepage">
      <div className="above-the-fold-spacer"></div>
      <Header />
      <Hero />
      <Main />
      <Testimonial />
    </div>
  );
};

export default Home;
