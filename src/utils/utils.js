import {STAR_TO_PERSENT, SortType} from "../const";

export const getRating = (rating) => {
  return Math.round(rating) * STAR_TO_PERSENT;
};

export const getUniqueCities = (offers) =>{
  const cities = offers.map((offer) => offer.city.name);
  return Array.from(new Set(cities));
};

export const getDate = (date) => {
  return date.toLocaleDateString(`en-US`, {
    month: `long`,
    year: `numeric`,
  });
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getSortedOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.POPULAR:
      return offers.slice();
    case SortType.TO_HIGHT:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.TOP_RATE:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }
  return offers;
};

const getOffersByCity = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

export const getFilteredOffers = (offers, city, sortType) => {
  const offersByCity = getOffersByCity(offers, city);
  const sortedOffers = getSortedOffers(offersByCity, sortType);

  return sortedOffers;
};

export const getSortedReviewsByDate = (reviews) => {
  if (reviews.length < 1) {
    return reviews;
  }

  return reviews.slice().sort((a, b) => b.date - a.date);
};

export const replaceItem = (Offers, offer) => {
  const index = Offers.findIndex((item) => item.id === offer.id);
  if (index === -1) {
    return Offers;
  }

  return [...Offers.slice(0, index),
    offer,
    ...Offers.slice(index + 1)];
};

export const upperCaseFirst = (str) => str ? str[0].toUpperCase() + str.slice(1) : str;
