import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';

const App = (props) => {
  const {
    availableOffersCount,
    currentCity
  } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            availableOffersCount={availableOffersCount}
            currentCity={currentCity}
          />
        </Route>
        <Route exact path="/login">
          <AuthScreen/>
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen/>
        </Route>
        <Route exact path="/offer/:id?" component={RoomScreen}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  availableOffersCount: PropTypes.number.isRequired,
  currentCity: PropTypes.string.isRequired
};

export default App;
