import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import OffersList from "./offers-list";
import {offers, reviews} from "../../mocks/test-data";


describe(`OffersList snapshot`, () => {
  const testStore = configureStore();
  const store = testStore({
    app: {
      activeOfferId: -1,
    },
    data: {
      offers,
      nearOffers: offers,
      isLoadedNearOffers: false,
      currentOffer: offers[0],
      isLoadedCurrentOffer: false,
      errorFetchMessadge: ``,
      reviews,
      isLoadedRviews: false,
    },
    user: {
      authorizationStatus: `AUTH`,
      userInfo: {
        email: `oliver@mail.ru`,
        avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
      }
    },
  });

  it(`Should OffersList render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <OffersList
              offers={offers}
              cardClass={`near-places`}
            />
          </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

