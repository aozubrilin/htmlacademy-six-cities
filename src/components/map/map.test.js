import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Map from "./map";
import {offers} from "../../mocks/test-data";


describe(`Map snapshot`, () => {
  const testStore = configureStore();
  const store = testStore({
    app: {
      city: `Amsterdam`,
      activeOfferId: -1,
    },
    data: {
      offers,
      isLoadedOffers: false,
      currentOffer: offers[0],
    },
    user: {
      authorizationStatus: `NO_AUTH`,
    }
  });

  it(`Should Map render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Map
            offers={offers}
            activeOfferId={-1}
            isLoading={true}
          />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

