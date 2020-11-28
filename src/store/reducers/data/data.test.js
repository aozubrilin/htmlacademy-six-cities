import {ActionType} from "../../action";
import {data} from "./data";
import {offers, reviews} from "../../../mocks/test-data";


const state = {
  offers: [],
  isLoadedOffers: false,
  nearOffers: [],
  isLoadedNearOffers: false,
  favoriteOffers: [],
  isLoadedfavoriteOffers: false,
  currentOffer: {},
  isLoadedCurrentOffer: false,
  errorFetchMessadge: ``,
  reviews: [],
  isLoadedRviews: false,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(data(void 0, {})).toEqual(state);
});

it(`Reducer should update reviews by load offers`, () => {
  expect(data({offers: []},
      {
        type: ActionType.LOAD_OFFERS,
        payload: offers
      })).toEqual({
    offers
  });
});

it(`Reducer should update reviews by load nearOffers`, () => {
  expect(data({nearOffers: []},
      {
        type: ActionType.LOAD_NEAR_OFFERS,
        payload: offers
      })).toEqual({
    nearOffers: offers
  });
});

it(`Reducer should update reviews by load favoriteOffersr`, () => {
  expect(data({favoriteOffers: []},
      {
        type: ActionType.LOAD_FAVORITE_OFFERS,
        payload: offers
      })).toEqual({
    favoriteOffers: offers
  });
});

it(`Reducer should update reviews by load currentOffer`, () => {
  expect(data({currentOffer: {}},
      {
        type: ActionType.LOAD_CURRENT_OFFER,
        payload: offers[0]
      })).toEqual({
    currentOffer: offers[0]
  });
});

it(`Reducer should update reviews by load currentOffer reviews`, () => {
  expect(data({reviews: []},
      {
        type: ActionType.LOAD_REVIEWS,
        payload: reviews
      })).toEqual({
    reviews
  });
});

it(`Reducer should update errorFetchMessadge`, () => {
  expect(data({errorFetchMessadge: null},
      {
        type: ActionType.SET_FETCH_ERROR,
        payload: `Message`
      })).toEqual({
    errorFetchMessadge: `Message`
  });
});

it(`Reducer should update favorites offers`, () => {
  expect(data({offers: [], nearOffers: [], favoriteOffers: [], currentOffer: offers[0]},
      {
        type: ActionType.UPDATE_FAVORITE_STATUS,
        payload: offers[1]
      })).toEqual({
    offers: [],
    nearOffers: [],
    favoriteOffers: [],
    currentOffer: offers[1]
  });
});

it(`Reducer should update isLoadedNearOffers by set true`, () => {
  expect(data({isLoadedNearOffers: false},
      {
        type: ActionType.IS_LOADED_NEAR_OFFERS,
        payload: true
      })).toEqual({
    isLoadedNearOffers: true
  });
});

it(`Reducer should update isLoadedCurrentOffer by set true`, () => {
  expect(data({isLoadedCurrentOffer: false},
      {
        type: ActionType.IS_LOADED_CURRENT_OFFER,
        payload: true
      })).toEqual({
    isLoadedCurrentOffer: true
  });
});

it(`Reducer should update isLoadedRviews by set true`, () => {
  expect(data({isLoadedRviews: false},
      {
        type: ActionType.IS_LOADED_REVIEWS,
        payload: true
      })).toEqual({
    isLoadedRviews: true
  });
});

it(`Reducer should update isLoadedfavoriteOffers by set true`, () => {
  expect(data({isLoadedfavoriteOffers: false},
      {
        type: ActionType.IS_LOADED_FAVORITE_OFFERS,
        payload: true
      })).toEqual({
    isLoadedfavoriteOffers: true
  });
});

