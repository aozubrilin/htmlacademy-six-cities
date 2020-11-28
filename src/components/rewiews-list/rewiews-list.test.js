import React from "react";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import renderer from "react-test-renderer";
import {reviews} from "../../mocks/test-data";
import ReviewList from "./reviews-list";

it(`Should ReviewList render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <ReviewList
          reviews={reviews}
        />
      </Router>
  )
      .toJSON();

  expect(tree).toMatchSnapshot();
});


