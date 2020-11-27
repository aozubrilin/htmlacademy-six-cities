import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Alert} from "./alert";

configure({adapter: new Adapter()});

it(`Alert close`, () => {
  const onClose = jest.fn();

  const wrapper = shallow(
      <Alert
        message={`Text`}
        onClose={onClose}
      />
  );

  wrapper.find(`span`).simulate(`click`);
  expect(onClose).toHaveBeenCalledTimes(1);
});
