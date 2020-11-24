import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sendReview} from "../../store/api-actions";

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: ``,
        review: ``,
        isValid: false,
      };

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleFieldChange = this._handleFieldChange.bind(this);
      this._validate = this._validate.bind(this);
    }

    _handleSubmit(evt) {
      evt.preventDefault();
      const {offerId, sendReviewAction} = this.props;
      const comment = {
        text: this.state.review,
        rating: this.state.rating
      };

      sendReviewAction(offerId, comment);

      this.setState({
        rating: ``,
        review: ``,
        isValid: false,
      });
    }

    _handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value
      });

      this._validate();
    }

    _validate() {
      const {rating, review} = this.state;

      this.setState({
        isValid: (review.length >= MIN_REVIEW_LENGTH && review.length <= MAX_REVIEW_LENGTH) && (Number(rating) > 0)
      });
    }

    render() {
      const {rating, review, isValid} = this.state;

      return (
        <Component
          {...this.props}
          rating={rating}
          review={review}
          onSubmit={this._handleSubmit}
          onFieldChange={this._handleFieldChange}
          isValid={isValid}
        />
      );
    }
  }

  WithReviewForm.propTypes = {
    offerId: PropTypes.number.isRequired,
    sendReviewAction: PropTypes.func.isRequired,
  };

  return WithReviewForm;
};

const mapDispatchToProps = (dispatch) => ({
  sendReviewAction(offerId, comment) {
    return dispatch(sendReview(offerId, comment));
  }
});

export {withReviewForm};
export default (WrappedComponent) => connect(null, mapDispatchToProps)(
    withReviewForm(WrappedComponent)
);
