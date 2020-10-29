import React, {PureComponent} from "react";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: ``,
        review: ``,
      };

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleFieldChange = this._handleFieldChange.bind(this);
    }

    _handleSubmit(evt) {
      evt.preventDefault();
    }

    _handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value
      });
    }

    render() {
      const {rating, review} = this.state;

      return (
        <Component
          {...this.props}
          rating={rating}
          review={review}
          onSubmit={this._handleSubmit}
          onFieldChange={this._handleFieldChange}
        />
      );
    }
  }
  return WithReviewForm;
};

export default withReviewForm;
