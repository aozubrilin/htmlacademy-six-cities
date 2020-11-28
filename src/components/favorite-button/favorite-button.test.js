import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import FavoriteButton from "./favorite-button";
import {favoriteButtonProperty} from "../../const";


const noop = () => {};
const testStore = configureStore();

describe(`FavoriteButton snapshot`, () => {
  describe(`with authorizationStatus: AUTH`, () => {

    const store = testStore({
      user: {
        authorizationStatus: `AUTH`,
      }
    });

    it(`FavoriteButton render correctly with isFavorite={false} and buttonProperty={favoriteButtonProperty.offerCard}`, () => {
      const tree = renderer.create(
          <Provider store={store}>
            <MemoryRouter>
              <FavoriteButton
                offerId={1}
                isFavorite={false}
                buttonProperty={favoriteButtonProperty.offerCard}
                onChangeFavoriteSatus={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`FavoriteButton render correctly with isFavorite={true} and buttonProperty={favoriteButtonProperty.offerCard}`, () => {
      const tree = renderer.create(
          <Provider store={store}>
            <MemoryRouter>
              <FavoriteButton
                offerId={1}
                isFavorite={true}
                buttonProperty={favoriteButtonProperty.offerCard}
                onChangeFavoriteSatus={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`FavoriteButton render correctly with isFavorite={false} and buttonProperty={favoriteButtonProperty.propertyCard}`, () => {
      const tree = renderer.create(
          <Provider store={store}>
            <MemoryRouter>
              <FavoriteButton
                offerId={1}
                isFavorite={false}
                buttonProperty={favoriteButtonProperty.propertyCard}
                onChangeFavoriteSatus={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`FavoriteButton render correctly with isFavorite={true} and buttonProperty={favoriteButtonProperty.propertyCard}`, () => {
      const tree = renderer.create(
          <Provider store={store}>
            <MemoryRouter>
              <FavoriteButton
                offerId={1}
                isFavorite={true}
                buttonProperty={favoriteButtonProperty.propertyCard}
                onChangeFavoriteSatus={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`with authorizationStatus: NO_AUTH`, () => {

    const store = testStore({
      user: {
        authorizationStatus: `NO_AUTH`,
      }
    });

    it(`FavoriteButton render correctly with isFavorite={false} and buttonProperty={favoriteButtonProperty.offerCard}`, () => {
      const tree = renderer.create(
          <Provider store={store}>
            <MemoryRouter>
              <FavoriteButton
                offerId={1}
                isFavorite={false}
                buttonProperty={favoriteButtonProperty.offerCard}
                onChangeFavoriteSatus={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`FavoriteButton render correctly with isFavorite={true} and buttonProperty={favoriteButtonProperty.offerCard}`, () => {
      const tree = renderer.create(
          <Provider store={store}>
            <MemoryRouter>
              <FavoriteButton
                offerId={1}
                isFavorite={true}
                buttonProperty={favoriteButtonProperty.offerCard}
                onChangeFavoriteSatus={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`FavoriteButton render correctly with isFavorite={false} and buttonProperty={favoriteButtonProperty.propertyCard}`, () => {
      const tree = renderer.create(
          <Provider store={store}>
            <MemoryRouter>
              <FavoriteButton
                offerId={1}
                isFavorite={false}
                buttonProperty={favoriteButtonProperty.propertyCard}
                onChangeFavoriteSatus={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`FavoriteButton render correctly with isFavorite={true} and buttonProperty={favoriteButtonProperty.propertyCard}`, () => {
      const tree = renderer.create(
          <Provider store={store}>
            <MemoryRouter>
              <FavoriteButton
                offerId={1}
                isFavorite={true}
                buttonProperty={favoriteButtonProperty.propertyCard}
                onChangeFavoriteSatus={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

});
