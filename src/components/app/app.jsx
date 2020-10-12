import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import {offerPropTypes} from "../../utils/prop-type";
import {reviewPropTypes} from "../../utils/prop-type";

const App = (props) => {
  const {
    availableOffersCount,
    currentCity,
    offers,
    reviews
  } = props;

  const favoritesOffers = offers.filter((offer) => offer.isPremium === true);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            availableOffersCount={availableOffersCount}
            currentCity={currentCity}
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <AuthScreen/>
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            offers={favoritesOffers}
          />
        </Route>
        <Route exact
          path="/offer/:id"
          render={({match}) => {
            const {id} = match.params;
            return (<OfferScreen
              offer={offers.find((item) => item.id === Number(id))}
              reviews={reviews}
            />);
          }} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  availableOffersCount: PropTypes.number.isRequired,
  currentCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired
};

export default App;
