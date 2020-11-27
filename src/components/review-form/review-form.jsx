import React from "react";
import PropTypes from "prop-types";
import Rating from "../rating/rating";
import withReviewForm from "../../hocs/with-review-form/with-review-form";


const ReviewForm = ({rating, onSubmit, onFieldChange, review, isValid}) => {
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
        value={review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isValid ? `` : `disabled`}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export {ReviewForm};
export default withReviewForm(ReviewForm);
