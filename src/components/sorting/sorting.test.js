import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {mockStore} from "../../mocks/test-data";
import configureStore from "redux-mock-store";
import Sorting from "./sorting";

const noop = () => {};

describe(`Sorting snapshot`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);
  it(`Should Sorting render correctly with isOpen={false}`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Sorting
            isOpen={false}
            onOpenChange={noop}
            onChangeSortedType={noop}
          />
        </Provider>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Sorting render correctly with isOpen={true}`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Sorting
            isOpen={true}
            onOpenChange={noop}
            onChangeSortedType={noop}
          />
        </Provider>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
