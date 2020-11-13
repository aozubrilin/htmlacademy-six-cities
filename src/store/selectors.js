import {createSelector} from "reselect";
import {getFilteredOffers, getSortedReviewsByDate} from "../utils/utils";


const getOffers = (({data}) => data.offers);
const getReviews = (({data}) => data.reviews);
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

export const getSortedReviews = createSelector(
    getReviews,
    (reviews) => {
      return getSortedReviewsByDate(reviews);
    }
);
