import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import {offerPropTypes} from "../../utils/prop-type";
import {reviewPropTypes} from "../../utils/prop-type";

const App = ({offers, reviews}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/login">
          <AuthScreen/>
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen/>
        </Route>
        <Route exact
          path="/offer/:id"
          render={({match}) => {
            const {id} = match.params;
            return (<OfferScreen
              nearOffers={offers.slice(0, 3)}
              offer={offers.find((item) => item.id === Number(id))}
              reviews={reviews}
            />);
          }} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired
};

const mapStateToProps = ({offers, reviews}) => ({
  offers,
  reviews,
});

export {App};
export default connect(mapStateToProps)(App);
