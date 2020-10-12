import React from "react";
import {reviewPropTypes} from "../../utils/prop-type";
import {getRating, getDate} from "../../utils/utils";

const ReviewsItem = ({review}) => {
  const {name, avatar, rating, date, text} = review;
  const ratingPercent = getRating(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar
          user__avatar"
            src={avatar}
            width="54"
            height="54"
            alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date.toISOString()}>{getDate(date)}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: reviewPropTypes
};

export default ReviewsItem;
