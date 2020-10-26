import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import {extend, getFilteredOffers} from "../utils/utils";
import {ActionType} from "./action";
import {CITIES, SortType} from '../const';


const defaultOffers = offers.filter((offer) => offer.city.name === CITIES[3]);

const initialState = {
  city: CITIES[3],
  currentOffers: defaultOffers,
  cities: CITIES,
  currentSortType: SortType.POPULAR,
  reviews,
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
        currentOffers: getFilteredOffers(offers, action.payload, state.currentSortType),
      });
    case ActionType.SET_SORTED_TYPE:
      return extend(state, {
        currentSortType: action.payload,
        currentOffers: getFilteredOffers(offers, state.city, action.payload),
      });
  }
  return state;
};

export {reducer};

