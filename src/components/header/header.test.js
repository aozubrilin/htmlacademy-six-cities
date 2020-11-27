import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import Header from "./header";


const testStore = configureStore();

describe(`Header snapshot`, () => {
  it(`Header render correctly when authorizationStatus: AUTH`, () => {

    const store = testStore({
      user: {
        authorizationStatus: `AUTH`,
        userInfo: {
          email: `oliver@mail.ru`,
          avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
        }
      },
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <Header/>
          </Router>
        </Provider>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  it(`Header render correctly when authorizationStatus: NO_AUTH`, () => {
    const store = testStore({
      user: {
        authorizationStatus: `NO_AUTH`,
        userInfo: {}
      },
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <Header/>
          </Router>
        </Provider>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

