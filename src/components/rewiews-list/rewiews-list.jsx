import React from "react";
import PropTypes from "prop-types";
import {reviewPropTypes} from "../../utils/prop-type";
import ReviewsItem from "../reviews-item/reviews-item";

const MAX_REVIEWS_COUNT = 10;

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.slice(0, MAX_REVIEWS_COUNT).map((review) =>
        <ReviewsItem
          key={review.id}
          review={review}
        />
      )}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
};

export default ReviewsList;
