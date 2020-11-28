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
          offerId={1}
          sendReviewAction={noop}
        />
      </Provider>
  )
      .toJSON();

  expect(tree).toMatchSnapshot();
});


