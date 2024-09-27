import { useEffect } from "react";
import { PropTypes } from "prop-types";
import withRouter from "./withRouter";

const ScrollToTop = ({ children, location }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return children;
};
ScrollToTop.propTypes = {
  children: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object),
};

export default withRouter(ScrollToTop);
