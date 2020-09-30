import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {
    availableOffersCount,
    currentCity
  } = props;

  return (
    <Main
      availableOffersCount={availableOffersCount}
      currentCity={currentCity}
    />
  );
};

App.propTypes = {
  availableOffersCount: PropTypes.number.isRequired,
  currentCity: PropTypes.string.isRequired
};

export default App;
