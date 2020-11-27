import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Sorting} from "./sorting";

configure({adapter: new Adapter()});

const noop = () => {};

describe(`Sorting simulate`, () => {

  it(`Change sort type`, () => {
    const onChangeSortedType = jest.fn();

    const wrapper = shallow(
        <Sorting
          isOpen={false}
          currentSortType={`Popular`}
          onOpenChange={noop}
          onChangeSortedType={onChangeSortedType}
        />
    );

    const sortButtons = wrapper.find(`li.places__option`);
    sortButtons.forEach((button) => button.simulate(`click`));
    expect(onChangeSortedType).toHaveBeenCalledTimes(sortButtons.length);
  });

  it(`Open sort menu`, () => {
    const onOpenChange = jest.fn();

    const wrapper = shallow(
        <Sorting
          isOpen={true}
          currentSortType={`Popular`}sss
          onOpenChange={onOpenChange}
          onChangeSortedType={noop}
        />
    );

    const form = wrapper.find(`form.places__sorting`);
    form.simulate(`click`);

    expect(onOpenChange).toHaveBeenCalledTimes(1);
  });
});
