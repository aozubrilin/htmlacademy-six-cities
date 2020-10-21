export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_CITY_OFFERS: `UPDATE_CITY_OFFERS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  updateCityOffers: () => ({
    type: ActionType.UPDATE_CITY_OFFERS,
  }),
};
