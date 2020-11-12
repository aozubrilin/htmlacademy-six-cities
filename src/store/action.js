export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_SORTED_TYPE: `SET_SORTED_TYPE`,
  SET_ACTIVE_OFFER_ID: `SET_OVER_OFFER_ID`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_CURRENT_OFFER: `LOAD_CURRENT_OFFER`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
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

export const loadCurrentOffer = (offer) => ({
  type: ActionType.LOAD_CURRENT_OFFER,
  payload: offer,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadNearOffers = (offers) => ({
  type: ActionType.LOAD_NEAR_OFFERS,
  payload: offers,
});

export const loadFavoriteOffers = (offers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload: offers,
});


