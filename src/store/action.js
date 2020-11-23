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
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_USER: `LOAD_USER`,
  IS_LOADED_NEAR_OFFERS: `IS_LOADED_NEAR_OFFERS`,
  IS_LOADED_CURRENT_OFFER: `IS_LOADED_CURRENT_OFFER`,
  IS_LOADED_OFFERS: `IS_LOADED_OFFERS`,
  IS_LOADED_REVIEWS: `IS_LOADED_REVIEWS`,
  IS_LOADED_FAVORITE_OFFERS: `IS_LOADED_FAVORITE_OFFERS`,
  SET_FETCH_ERROR: `SET_FETCH_ERROR`,
  CLOSE_ALERT: `CLOSE_ALERT`,
  UPDATE_FAVORITE_STATUS: `UPDATE_FAVORITE_STATUS`,
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

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const loadUser = (userInfo) => ({
  type: ActionType.LOAD_USER,
  payload: userInfo,
});

export const setIsLoadedNearOffers = (setFlag) => ({
  type: ActionType.IS_LOADED_NEAR_OFFERS,
  payload: setFlag,
});

export const setIsLoadedCurrentOffer = (setFlag) => ({
  type: ActionType.IS_LOADED_CURRENT_OFFER,
  payload: setFlag,
});

export const setIsLoadedOffers = (setFlag) => ({
  type: ActionType.IS_LOADED_OFFERS,
  payload: setFlag,
});

export const setIsLoadedReviews = (setFlag) => ({
  type: ActionType.IS_LOADED_REVIEWS,
  payload: setFlag,
});

export const setIsLoadedFavoriteOffers = (setFlag) => ({
  type: ActionType.IS_LOADED_FAVORITE_OFFERS,
  payload: setFlag,
});

export const setFetchMessage = (errorMessage) => ({
  type: ActionType.SET_FETCH_ERROR,
  payload: errorMessage,
});

export const closeAlertMessage = () => ({
  type: ActionType.CLOSE_ALERT
});

export const updateFavoriteStatus = (favoriteOffer) => ({
  type: ActionType.UPDATE_FAVORITE_STATUS,
  payload: favoriteOffer,
});
