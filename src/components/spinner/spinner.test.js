import React from "react";
import renderer from "react-test-renderer";
import Spinner from "./spinner";


it(`Should Spinner render correctly`, () => {
  const tree = renderer.create(
      <Spinner/>
  )
      .toJSON();

  expect(tree).toMatchSnapshot();
});


