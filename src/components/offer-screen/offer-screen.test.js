import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import OfferScreen from "./offer-screen";
import thunk from "redux-thunk";
import {offers, reviews} from "../../mocks/test-data";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock(`../../store/api-actions`,
    () => ({
      fetchIdOffer: jest.fn(() => jest.fn(() => Promise.resolve())),
      fetchNearOffers: jest.fn(() => jest.fn(() => Promise.resolve())),
      fetchReviews: jest.fn(() => jest.fn(() => Promise.resolve())),
    })
);


describe(`OfferScreen snapshot`, () => {

  it(`OfferScreen render correctly`, () => {

    const store = mockStore({
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


    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <OfferScreen
              match={{params: {id: 2}}}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


