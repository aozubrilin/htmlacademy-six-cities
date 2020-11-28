import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CitiesList} from "./cities-list";
import {CITIES} from "../../const";

configure({adapter: new Adapter()});

it(`Change city`, () => {
  const onChangeCurrentCity = jest.fn();

  const wrapper = shallow(
      <CitiesList
        cities={CITIES}
        currentCity={CITIES[1]}
        onChangeCurrentCity={onChangeCurrentCity}
      />
  );

  const cityItems = wrapper.find(`li.locations__item`);
  cityItems.forEach((cityItem) => cityItem.simulate(`click`));
  expect(onChangeCurrentCity).toHaveBeenCalledTimes(cityItems.length);
});
