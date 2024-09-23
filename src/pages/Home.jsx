import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main/Main";
import "./Home.scss";
import "../App.scss";

const Home = () => {
  return (
    <div className="homepage">
      <div className="above-the-fold-spacer"></div>
      <Header />
      <Hero />
      <Main />
    </div>
  );
};

export default Home;
