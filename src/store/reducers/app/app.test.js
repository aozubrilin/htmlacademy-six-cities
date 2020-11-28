import {ActionType} from "../../action";
import {app} from "./app";
import {CITIES, SortType} from "../../../const";

const state = {
  city: CITIES[3],
  cities: CITIES,
  currentSortType: SortType.POPULAR,
  activeOfferId: -1,
};


it(`Reducer without additional parameters should return initial state`, () => {
  expect(app(void 0, {})).toEqual(state);
});

it(`Reducer should change current city`, () => {
  expect(app({city: `Amsterdam`},
      {
        type: ActionType.CHANGE_CITY,
        payload: `Paris`
      })).toEqual({
    city: `Paris`
  });
});

it(`Reducer should update currentSortType`, () => {
  expect(app({currentSortType: SortType.POPULAR},
      {
        type: ActionType.SET_SORTED_TYPE,
        payload: SortType.TO_HIGHT
      })).toEqual({
    currentSortType: SortType.TO_HIGHT
  });
});

it(`Reducer should update activeOfferId`, () => {
  expect(app({activeOfferId: -1},
      {
        type: ActionType.SET_ACTIVE_OFFER_ID,
        payload: 2
      })).toEqual({
    activeOfferId: 2
  });
});

