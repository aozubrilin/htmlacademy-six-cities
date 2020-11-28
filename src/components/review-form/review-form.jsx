import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Rating from "../rating/rating";
import {connect} from "react-redux";
import {RviewSymbolLenght} from "../../const";
import {extend} from "../../utils/utils";
import {sendReview} from "../../store/api-actions";


const ReviewForm = ({offerId, sendReviewAction}) => {

  const [review, setReview] = useState({
    rating: ``,
    review: ``
  });

  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    validateForm();
  }, [review]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendReviewAction(offerId, review);
    setReview(() => {
      return {
        rating: ``,
        review: ``
      };
    });

    setIsValidForm(false);
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setReview(extend(review, {[name]: value}));
  };

  const validateForm = () => {
    const isValid = (review.review.length >= RviewSymbolLenght.MIN
      && review.review.length <= RviewSymbolLenght.MAX)
    && (Number(review.rating) > 0);
    setIsValidForm(isValid);
  };

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating rating={review.rating} onChange={handleFieldChange}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
        value={review.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValidForm}>
          Submit
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  sendReviewAction(offerId, review) {
    return dispatch(sendReview(offerId, review));
  }
});

ReviewForm.propTypes = {
  offerId: PropTypes.number.isRequired,
  sendReviewAction: PropTypes.func.isRequired
};

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
