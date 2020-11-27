import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";
import {CITIES, SortType} from "../../../const";


const initialState = {
  city: CITIES[3],
  cities: CITIES,
  currentSortType: SortType.POPULAR,
  activeOfferId: -1,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.SET_SORTED_TYPE:
      return extend(state, {
        currentSortType: action.payload,
      });
    case ActionType.SET_ACTIVE_OFFER_ID:
      return extend(state, {
        activeOfferId: action.payload,
      });
  }
  return state;
};

export {app};

