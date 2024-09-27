import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ScrollToTop from "../hooks/ScrollToTop";
import { PropTypes } from "prop-types";

const HomeWrapper = (props) => {
  return (
    <ScrollToTop>
      <div className="homepage">
        <div className="above-the-fold-spacer"></div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </ScrollToTop>
  );
};

HomeWrapper.propTypes = {
  children: PropTypes.instanceOf(Object),
};

export default HomeWrapper;
