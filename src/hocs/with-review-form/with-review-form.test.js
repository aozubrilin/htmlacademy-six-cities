import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {mockStore} from "../../mocks/test-data";
import withReviewForm from "./with-review-form";


const MockComponent = () => <div>Mock Component</div>;

MockComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
};

const MockComponentWrapped = withReviewForm(MockComponent);

test(`Should withReviewForm render correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);
  const tree = renderer.create((
    <Provider store={store}>
      <MockComponentWrapped
        offerId={1}
        sendReviewAction={() => {}}
      />
    </Provider>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});

