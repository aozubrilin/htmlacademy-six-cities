import React from "react";
import renderer from "react-test-renderer";
import FavoriteButtonContent from "./favorite-buttton-content";
import {favoriteButtonProperty} from "../../const";


describe(`FavoriteButtonContent snapshot`, () => {

  it(`FavoriteButtonContent render correctly with isFavorite={false} and buttonProperty={favoriteButtonProperty.offerCard}`, () => {
    const tree = renderer.create(
        <FavoriteButtonContent
          isFavorite={false}
          buttonProperty={favoriteButtonProperty.offerCard}
        />
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`FavoriteButton render correctly with isFavorite={true} and buttonProperty={favoriteButtonProperty.offerCard}`, () => {
    const tree = renderer.create(
        <FavoriteButtonContent
          isFavorite={true}
          buttonProperty={favoriteButtonProperty.offerCard}
        />
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`FavoriteButton render correctly with isFavorite={false} and buttonProperty={favoriteButtonProperty.propertyCard}`, () => {
    const tree = renderer.create(
        <FavoriteButtonContent
          isFavorite={false}
          buttonProperty={favoriteButtonProperty.propertyCard}
        />
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`FavoriteButton render correctly with isFavorite={true} and buttonProperty={favoriteButtonProperty.propertyCard}`, () => {
    const tree = renderer.create(
        <FavoriteButtonContent
          isFavorite={true}
          buttonProperty={favoriteButtonProperty.propertyCard}
        />
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
