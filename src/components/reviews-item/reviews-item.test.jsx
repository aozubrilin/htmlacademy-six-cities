import React from "react";
import renderer from "react-test-renderer";
import {reviews} from "../../mocks/test-data";
import ReviewItem from "./reviews-item";

it(`Should ReviewItem render correctly`, () => {
  const tree = renderer.create(
      <ReviewItem
        review={reviews[0]}
      />
  )
      .toJSON();

  expect(tree).toMatchSnapshot();
});


