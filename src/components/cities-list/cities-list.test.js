import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {mockStore} from "../../mocks/test-data";
import CitiesList from "./cities-list";


describe(`CitiesList snapshot`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);
  it(`Should CitiesList render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <CitiesList
            onChangeCurrentCity={() => {}}
          />
        </Provider>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

