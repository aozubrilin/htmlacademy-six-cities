import React from "react";
import renderer from "react-test-renderer";
import {configure, mount} from "enzyme";
import Rating from "./rating";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});
const noop = () => {};
describe(`Rating snapshot`, () => {
  it(`Should Rating render correctly`, () => {
    const tree = renderer.create(
        <Rating
          rating={`4`}
          onChange={noop}
        />
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Rating checked  3 stars`, () => {
    const tree = mount(
        <Rating
          rating={`3`}
          offerId={`1`}
          onChange={noop}
        />
    );

    const starsInput = tree.find(`.form__rating-input`).at(3);
    starsInput.simulate(`change`);
    expect(tree.debug()).toMatchSnapshot();
  });

});
