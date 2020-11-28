import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import OfferCard from "./offer-card";
import {offers, mockStore} from "../../mocks/test-data";


describe(`OfferCard snapshot`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  it(`Should OfferCard render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <OfferCard
              offer={offers[0]}
              cardClass={`near-places`}
              onChangeOfferId={() => {}}
            />
          </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
