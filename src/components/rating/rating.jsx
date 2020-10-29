import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {ratingReview} from "../../const";


const Rating = ({rating, onChange}) => {
  return (
    <div className="reviews__rating-form form__rating">
      {ratingReview.map(({title, value}) => {
        return (
          <Fragment key={`${title}-${value}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={onChange}
              checked={rating === value}
            />
            <label htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>);
      })}
    </div>
  );
};

Rating.propTypes = {
  onChange: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
};

export default Rating;
