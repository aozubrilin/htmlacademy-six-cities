import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";


const initialState = {
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

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.LOAD_CURRENT_OFFER:
      return extend(state, {
        currentOffer: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {
        nearOffers: action.payload,
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload,
      });
    case ActionType.IS_LOADED_NEAR_OFFERS:
      return extend(state, {
        isLoadedNearOffers: action.payload,
      });
    case ActionType.IS_LOADED_CURRENT_OFFER:
      return extend(state, {
        isLoadedCurrentOffer: action.payload,
      });
    case ActionType.IS_LOADED_OFFERS:
      return extend(state, {
        isLoadedOffers: action.payload,
      });
    case ActionType.IS_LOADED_REVIEWS:
      return extend(state, {
        isLoadedRviews: action.payload,
      });
    case ActionType.IS_LOADED_FAVORITE_OFFERS:
      return extend(state, {
        isLoadedfavoriteOffers: action.payload,
      });
    case ActionType.SET_FETCH_ERROR:
      return extend(state, {
        errorFetchMessadge: action.payload,
      });
    case ActionType.CLOSE_ALERT:
      return extend(state, {
        errorFetchMessadge: null,
      });
  }
  return state;
};

export {data};

