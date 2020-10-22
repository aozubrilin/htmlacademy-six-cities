import {STAR_TO_PERSENT} from "../const";

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
