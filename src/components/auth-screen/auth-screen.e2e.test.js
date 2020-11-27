import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AuthScreen} from "./auth-screen";

configure({adapter: new Adapter()});

it(`click on Login correctly`, () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(
      <AuthScreen
        city={`Amsterdam`}
        isAuthorizedStatus={false}
        onSubmit={onSubmit}
      />
  );

  wrapper.find(`form`).simulate(`click`, {preventDefault() {}});
  expect(onSubmit).toHaveBeenCalledTimes(0);
});
