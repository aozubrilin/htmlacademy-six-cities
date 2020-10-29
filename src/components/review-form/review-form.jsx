import React from "react";
import PropTypes from "prop-types";
import Rating from "../rating/rating";

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

const ReviewForm = ({rating, onSubmit, onFieldChange}) => {
  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating rating={rating} onChange={onFieldChange}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onFieldChange}
        minLength={MIN_REVIEW_LENGTH}
        maxLength={MAX_REVIEW_LENGTH}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
};

export default ReviewForm;
