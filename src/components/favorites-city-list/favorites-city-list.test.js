import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import FavoritesCityList from "./favorites-city-list";
import {mockStore, favoriteOffers} from "../../mocks/test-data";


describe(`FavoritesCityList snapshot`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  it(`Should FavoritesCityList render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <FavoritesCityList
              offers={favoriteOffers}
            />
          </Router>
        </Provider>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

