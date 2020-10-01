import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  AVAILABLE_OFFERS_COUNT: 322,
  CURRENT_CITY: `Amsterdam`
};

ReactDOM.render(
    <App
      availableOffersCount={Settings.AVAILABLE_OFFERS_COUNT}
      currentCity={Settings.CURRENT_CITY}
    />,
    document.querySelector(`#root`)
);
