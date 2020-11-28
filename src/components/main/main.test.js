import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import Main from "./main";
import {mockStore} from "../../mocks/test-data";


describe(`Main snapshot`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  it(`Should Main render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <Main/>
          </Router>
        </Provider>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

