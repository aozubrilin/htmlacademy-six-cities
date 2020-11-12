import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";


const initialState = {
  offers: [],
  nearOffers: [],
  favoriteOffers: [],
  currentOffer: [],
  reviews: [],
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
  }
  return state;
};

export {data};

