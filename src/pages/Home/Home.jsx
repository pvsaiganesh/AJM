import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import "./Home.scss";
import "../../App.scss";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="homepage">
      <div className="above-the-fold-spacer"></div>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
