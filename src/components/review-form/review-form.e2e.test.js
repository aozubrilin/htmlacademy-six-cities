import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ReviewForm} from "./review-form";

configure({adapter: new Adapter()});

it(`ReviewForm simulate`, () => {
  const onSubmit = jest.fn();
  const onFieldChange = jest.fn();

  const wrapper = shallow(
      <ReviewForm
        rating={`4`}
        onSubmit={onSubmit}
        onFieldChange={onFieldChange}
        review={`Text`}
        isValid={true}
        offerId={1}
      />
  );

  wrapper.find(`textarea`).simulate(`change`);
  expect(onFieldChange).toHaveBeenCalledTimes(1);

  wrapper.find(`form`).simulate(`submit`);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
