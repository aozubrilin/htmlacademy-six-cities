import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import FavoritesCityItem from "./favorites-city-item";
import {mockStore, favoriteOffers} from "../../mocks/test-data";
import {CITIES} from "../../const";


describe(`FavoritesCityItem snapshot`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  it(`Should FavoritesCityItem render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <FavoritesCityItem
              city={CITIES[2]}
              offers={favoriteOffers}
            />
          </Router>
        </Provider>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
