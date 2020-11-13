import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import Main from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";


const App = () => {

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/login">
          <AuthScreen/>
        </Route>
        <PrivateRoute
          exact
          path="/favorites"
          render={() => {
            return (
              <FavoritesScreen/>
            );
          }}
        />
        <Route exact path="/offer/:id" component={OfferScreen}/>
      </Switch>
    </Router>
  );
};


export default App;
