import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import configureStore from "redux-mock-store";
import {mockStore} from "../../mocks/test-data";
import AuthScreen from "./auth-screen";


describe(`AuthScreen snapshot`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);
  it(`Should AuthScreen render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <AuthScreen
              onSubmit={() => {}}
            />
          </Router>
        </Provider>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
