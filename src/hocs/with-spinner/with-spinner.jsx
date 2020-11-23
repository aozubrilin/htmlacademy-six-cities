import React from "react";
import Spinner from "../../components/spinner/spinner";

const withSpinner = (Component) => (props) => {
  const {isLoading} = props;
  return isLoading ? <Spinner /> : <Component {...props} />;
};

export default withSpinner;
