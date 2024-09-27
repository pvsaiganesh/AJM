// withRouter.js

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PropTypes } from "prop-types";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
withRouter.propTypes = {
  Component: PropTypes.instanceOf(Object),
};

export default withRouter;
