import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import {extend} from "../utils/utils";
import {ActionType} from "./action";
import {CITIES} from '../const';

const defaultOffers = offers.filter((offer) => offer.city === CITIES[3]);

const initialState = {
  city: CITIES[3],
  currentOffersCity: defaultOffers,
  cities: CITIES,
  reviews,
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
        currentOffersCity: offers.filter((offer) => offer.city === action.payload)
      });
  }
  return state;
};

export {reducer};

