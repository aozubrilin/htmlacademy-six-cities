export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_SORTED_TYPE: `SET_SORTED_TYPE`,
  SET_ACTIVE_OFFER_ID: `SET_OVER_OFFER_ID`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city
});

export const setSortedType = (sortType) => ({
  type: ActionType.SET_SORTED_TYPE,
  payload: sortType,
});

export const setActiveOfferId = (offerId) => ({
  type: ActionType.SET_ACTIVE_OFFER_ID,
  payload: offerId,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

