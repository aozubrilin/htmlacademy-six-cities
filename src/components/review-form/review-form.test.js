import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {mockStore} from "../../mocks/test-data";
import ReviewForm from "./review-form";

const noop = () => {};
it(`Should ReviewForm render correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer.create(
      <Provider store={store}>
        <ReviewForm
          rating={`4`}
          onSubmit={noop}
          onFieldChange={noop}
          review={`Text`}
          isValid={true}
          offerId={1}
        />
      </Provider>
  )
      .toJSON();

  expect(tree).toMatchSnapshot();
});


