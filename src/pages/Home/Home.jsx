import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import "./Home.scss";
import "../../App.scss";
import HomeWrapper from "../HomeWrapper";

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <Main />
    </HomeWrapper>
  );
};

export default Home;
