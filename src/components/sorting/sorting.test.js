import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {mockStore} from "../../mocks/test-data";
import configureStore from "redux-mock-store";
import Sorting from "./sorting";

const noop = () => {};

const testStore = configureStore();
const store = testStore(mockStore);
it(`Should Sorting render correctly `, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Sorting
          currentSortType={`Popular`}
          onChangeSortedType={noop}
        />
      </Provider>
  )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

