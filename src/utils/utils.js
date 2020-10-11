import {STAR_TO_PERSENT} from "../const";

export const getRating = (rating) => {
  return Math.round(rating) * STAR_TO_PERSENT;
};
