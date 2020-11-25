import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../const";
import {getAuthorizationStatus} from "../../store/selectors";

const PrivateRoute = (props) => {
  const {render, path, exact, isAuthorizedStatus} = props;

  return isAuthorizedStatus ?
    <Route
      path={path}
      exact={exact}
      render={render}
    /> : <Redirect to={AppRoute.LOGIN} />;
};

PrivateRoute.propTypes = {
  isAuthorizedStatus: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorizedStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
