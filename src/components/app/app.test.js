import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {mockStore} from "../../mocks/test-data";
import App from "./app";


describe(`App snapshot`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);
  it(`Should App render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <App/>
        </Provider>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

