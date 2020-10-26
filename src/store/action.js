export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_SORTED_TYPE: `SET_SORTED_TYPE`,
  SET_ACTIVE_OFFER_ID: `SET_OVER_OFFER_ID`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  setSortedType: (sortType) => ({
    type: ActionType.SET_SORTED_TYPE,
    payload: sortType,
  }),
  setActiveOfferId: (offerId) => ({
    type: ActionType.SET_ACTIVE_OFFER_ID,
    payload: offerId,
  }),
};
