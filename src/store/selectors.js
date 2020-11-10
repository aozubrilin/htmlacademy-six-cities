import {createSelector} from "reselect";
import {getFilteredOffers} from "../utils/utils";


export const getOffers = (({data}) => data.offers);
const getCity = (({app}) => app.city);
const getSortingType = (({app}) => app.currentSortType);


export const getCurrentOffers = createSelector(
    getOffers,
    getCity,
    getSortingType,
    (offers, currentCity, currentSortType) => {
      return getFilteredOffers(offers, currentCity, currentSortType);
    }
);
