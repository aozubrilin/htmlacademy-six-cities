import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import FavoritesScreen from "./favorites-screen";
import {favoriteOffers} from "../../mocks/test-data";

const testStore = configureStore();

describe(`FavoritesScreen snapshot`, () => {
  it(`FavoritesScreen render correctly`, () => {

    const store = testStore({
      user: {
        authorizationStatus: `AUTH`,
        userInfo: {
          email: `oliver@mail.ru`,
          avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
        }
      },
      data: {
        favoriteOffers,
        isLoadedfavoriteOffers: false,
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <FavoritesScreen/>
          </Router>
        </Provider>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  it(`render correctly when favoriteOffers empty`, () => {
    const store = testStore({
      user: {
        authorizationStatus: `AUTH`,
        userInfo: {
          email: `oliver@mail.ru`,
          avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
        }
      },
      data: {
        favoriteOffers: [],
        isLoadedfavoriteOffers: false,
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <FavoritesScreen/>
          </Router>
        </Provider>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

