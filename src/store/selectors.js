import {createSelector} from "reselect";
import {getFilteredOffers, getSortedReviewsByDate} from "../utils/utils";
import {AuthorizationStatus} from "../const";


const MAX_COUNT_NEAR_OFFERS = 3;
const MAX_COUNT_REVIEWS = 10;

export const getOffers = (({data}) => data.offers);
export const getCurrentOffer = (({data}) => data.currentOffer);
export const getNearOffers = (({data}) => data.nearOffers.slice(0, MAX_COUNT_NEAR_OFFERS));
export const getFavoriteOffers = (({data}) => data.favoriteOffers);
export const getReviews = (({data}) => data.reviews.slice(0, MAX_COUNT_REVIEWS));

export const getIsLoadedOffers = (({data}) => data.isLoadedOffers);
export const getIsLoadedNearOffers = (({data}) => data.isLoadedNearOffers);
export const getIsLoadedfavoriteOffers = (({data}) => data.isLoadedfavoriteOffers);
export const getIsLoadedCurrentOffer = (({data}) => data.isLoadedCurrentOffer);
export const getIsLoadedRviews = (({data}) => data.isLoadedRviews);

export const getActiveOfferId = (({app}) => app.activeOfferId);
export const getCurrentSortType = (({app}) => app.currentSortType);
export const getCity = (({app}) => app.city);
export const getCities = (({app}) => app.cities);
export const getSortingType = (({app}) => app.currentSortType);

export const getAuthorizationStatus = (({user}) => user.authorizationStatus === AuthorizationStatus.AUTH);
export const getUserInfo = (({user}) => user.userInfo);

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
