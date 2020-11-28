
import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import {offers} from "../../mocks/test-data";

configure({adapter: new Adapter()});

describe(`Should OfferCard mouse events be simulated`, () => {

  it(`Should OfferCard mouse enter event to be set`, () => {
    const onChangeOfferId = jest.fn();

    const wrapper = shallow(
        <OfferCard
          offer={offers[0]}
          cardClass={`near-places`}
          onChangeOfferId={onChangeOfferId}
        />
    );

    wrapper.find(`.place-card`).simulate(`mouseEnter`);
    expect(onChangeOfferId).toHaveBeenCalledTimes(1);
  });

  it(`Should OfferCard mouse leave event to be set`, () => {
    const onChangeOfferId = jest.fn();

    const wrapper = shallow(
        <OfferCard
          offer={offers[0]}
          cardClass={`near-places`}
          onChangeOfferId={onChangeOfferId}
        />
    );


    wrapper.find(`.place-card`).simulate(`mouseLeave`);
    expect(onChangeOfferId).toHaveBeenCalledTimes(1);
  });
});
