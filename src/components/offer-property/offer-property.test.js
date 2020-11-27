import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import OfferProperty from "./offer-property";
import {offers, reviews} from "../../mocks/test-data";


describe(`OfferProperty snapshot`, () => {
  const testStore = configureStore();
  const store = testStore({
    app: {
      activeOfferId: -1,
    },
    data: {
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

  it(`Should OfferProperty render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <OfferProperty
              offer={offers[0]}
              offerReviews={reviews}
              cardClass={`near-places`}
              onChangeOfferId={() => {}}
              isAuthorizedStatus={true}
              nearOffers={offers}
              isLoadedReviews={false}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

