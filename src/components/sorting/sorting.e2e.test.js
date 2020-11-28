import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Sorting} from "./sorting";

configure({adapter: new Adapter()});

it(`Change sort type`, () => {
  const onChangeSortedType = jest.fn();

  const wrapper = shallow(
      <Sorting
        currentSortType={`Popular`}
        onChangeSortedType={onChangeSortedType}
      />
  );

  const sortButtons = wrapper.find(`li.places__option`);
  sortButtons.forEach((button) => button.simulate(`click`));
  expect(onChangeSortedType).toHaveBeenCalledTimes(sortButtons.length);
});

