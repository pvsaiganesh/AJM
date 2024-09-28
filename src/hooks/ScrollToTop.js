import { useEffect } from "react";
import { PropTypes } from "prop-types";
import withRouter from "./withRouter";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const routePath = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [routePath]);

  return children;
};
ScrollToTop.propTypes = {
  children: PropTypes.instanceOf(Object),
};

export default withRouter(ScrollToTop);
