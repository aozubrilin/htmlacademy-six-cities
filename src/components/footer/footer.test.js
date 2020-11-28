import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";


describe(`Footer snapshot`, () => {
  it(`Should Footer render correctly`, () => {
    const tree = renderer.create(
        <Footer/>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

