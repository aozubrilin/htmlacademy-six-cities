import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty";


describe(`MainEmpty snapshot`, () => {

  it(`Should MainEmpty render correctly`, () => {
    const tree = renderer.create(
        <MainEmpty
          city={`Amsterdam`}
        />
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

