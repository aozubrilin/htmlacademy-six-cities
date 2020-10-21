import offers from '../mocks/offers';
import {extend} from "../utils/utils";
import {ActionType} from "./action";
import {CITIES} from '../const';

const defaultOffers = offers.filter((offer) => offer.city === CITIES[3]);

const initialState = {
  city: CITIES[3],
  offers: defaultOffers,
  cities: CITIES,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.UPDATE_CITY_OFFERS:
      return extend(state, {
        offers: offers.filter((offer) => offer.city === state.city)
      });
  }
  return state;
};

export {reducer};

