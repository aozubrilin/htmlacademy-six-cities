import React from "react";
import renderer from "react-test-renderer";
import Alert from "./alert";

const MESSAGE = `Error`;

describe(`Alert snapshot`, () => {
  it(`Should Alert render correctly`, () => {
    const tree = renderer.create(
        <Alert
          message={MESSAGE}
          onClose={() => {}}
        />
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

