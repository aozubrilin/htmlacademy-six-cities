import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import PrivateRoute from "./private-route";

const noop = () => {};

describe(`PrivateRoute snapshot`, () => {
  it(`Should PrivateRoute render correctly with authorizationStatus: AUTH`, () => {
    const testStore = configureStore();
    const store = testStore({
      user: {
        authorizationStatus: `AUTH`,
      },
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <PrivateRoute
              exact={true}
              path={`/login`}
              render={noop}
            />
          </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should PrivateRoute render correctly with authorizationStatus: NO_AUTH`, () => {
    const testStore = configureStore();
    const store = testStore({
      user: {
        authorizationStatus: `NO_AUTH`,
      },
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <PrivateRoute
              exact={true}
              path={`/login`}
              render={noop}
            />
          </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
