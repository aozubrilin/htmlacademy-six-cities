import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoriteButton} from "./favorite-button";
import {favoriteButtonProperty} from "../../const";

configure({adapter: new Adapter()});

it(`click on FavoriteButton correctly`, () => {
  const onChangeFavoriteSatus = jest.fn();
  const wrapper = shallow(
      <FavoriteButton
        offerId={1}
        isFavorite={true}
        isAuthorizedStatus={true}
        offerBookmarkStatus={false}
        onChangeFavoriteSatus={onChangeFavoriteSatus}
        buttonProperty={favoriteButtonProperty.propertyCard}
      />
  );

  wrapper.find(`.property__bookmark-button`).simulate(`click`, {preventDefault() {}});
  expect(onChangeFavoriteSatus).toHaveBeenCalledTimes(1);
});


