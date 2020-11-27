import React from "react";
import PropTypes from "prop-types";
import {reviewPropTypes} from "../../utils/prop-type";
import ReviewsItem from "../reviews-item/reviews-item";
import withSpinner from "../../hocs/with-spinner/with-spinner";


const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review, i) =>
        <ReviewsItem
          key={`${review.id}-${review.user.name}-${i}`}
          review={review}
        />
      )}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
};

export default withSpinner(ReviewsList);
