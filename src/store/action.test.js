import {offers} from "../mocks/test-data";
import {
  ActionType, changeCity, setSortedType, setActiveOfferId, loadOffers,
  loadCurrentOffer, loadReviews, requireAuthorization, loadNearOffers, loadFavoriteOffers,
  loadUser, setIsLoadedNearOffers, setIsLoadedCurrentOffer, setIsLoadedOffers, setIsLoadedReviews,
  setIsLoadedFavoriteOffers, setFetchMessage, updateFavoriteStatus} from "./action";


describe(`Action creators work correctly`, () => {

  it(`Action creator for to change the filter by city`, () => {
    expect(changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`
    });
  });

  it(`Action creator for set sort type works correctly`, () => {
    expect(setSortedType(`Popular`)).toEqual({
      type: ActionType.SET_SORTED_TYPE,
      payload: `Popular`
    });
  });

  it(`Action creator for set active offer works correctly`, () => {
    expect(setActiveOfferId(1)).toEqual({
      type: ActionType.SET_ACTIVE_OFFER_ID,
      payload: 1
    });
  });

  it(`Action creator for load offer by id works correctly`, () => {
    expect(loadCurrentOffer({})).toEqual({
      type: ActionType.LOAD_CURRENT_OFFER,
      payload: {}
    });
  });

  it(`Action creator for load offer works correctly`, () => {
    expect(loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers
    });
  });

  it(`Action creator for load reviews works correctly`, () => {
    expect(loadReviews([])).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: []
    });
  });

  it(`Action creator work correctly for require authorization status`, () => {
    expect(requireAuthorization(`Status`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `Status`,
    });
  });

  it(`Action creator for load near offers works correctl`, () => {
    expect(loadNearOffers([])).toEqual({
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: [],
    });
  });

  it(`Action creator for load favorite offers works correctl`, () => {
    expect(loadFavoriteOffers([])).toEqual({
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: [],
    });
  });

  it(`Action creator for load favorite offers works correctl`, () => {
    expect(loadUser({})).toEqual({
      type: ActionType.LOAD_USER,
      payload: {},
    });
  });

  it(`Action creator for set isLoaded offer flag works correctly`, () => {
    expect(setIsLoadedCurrentOffer(true)).toEqual({
      type: ActionType.IS_LOADED_CURRENT_OFFER,
      payload: true,
    });
  });

  it(`Action creator for set isLoaded offers flag works correctly`, () => {
    expect(setIsLoadedOffers(true)).toEqual({
      type: ActionType.IS_LOADED_OFFERS,
      payload: true,
    });
  });

  it(`Action creator for set isLoaded near offers flag works correctly`, () => {
    expect(setIsLoadedNearOffers(true)).toEqual({
      type: ActionType.IS_LOADED_NEAR_OFFERS,
      payload: true,
    });
  });

  it(`Action creator for set isLoaded reviews flag works correctly`, () => {
    expect(setIsLoadedReviews(true)).toEqual({
      type: ActionType.IS_LOADED_REVIEWS,
      payload: true,
    });
  });

  it(`Action creator for set isLoaded favorite offers flag works correctly`, () => {
    expect(setIsLoadedFavoriteOffers(true)).toEqual({
      type: ActionType.IS_LOADED_FAVORITE_OFFERS,
      payload: true,
    });
  });

  it(`Action creator for load eror fetch messadge works correctl`, () => {
    expect(setFetchMessage(`Message`)).toEqual({
      type: ActionType.SET_FETCH_ERROR,
      payload: `Message`,
    });
  });

  it(`Action creator for update offers favorite status works correctl`, () => {
    expect(updateFavoriteStatus(1)).toEqual({
      type: ActionType.UPDATE_FAVORITE_STATUS,
      payload: 1,
    });
  });
});
