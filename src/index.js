import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

const Settings = {
  AVAILABLE_OFFERS_COUNT: 322,
  CURRENT_CITY: `Amsterdam`
};

ReactDOM.render(
    <App
      availableOffersCount={Settings.AVAILABLE_OFFERS_COUNT}
      currentCity={Settings.CURRENT_CITY}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
