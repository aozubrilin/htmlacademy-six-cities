import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import OfferCard from "../offer-card/offer-card";
import {connect} from "react-redux";


class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentOffer: null
    };

    this._handlePlaceCardMouseEnter = this._handlePlaceCardMouseEnter.bind(this);
    this._handlePlaceCardMouseLeave = this._handlePlaceCardMouseLeave.bind(this);
  }

  _handlePlaceCardMouseEnter(offer) {
    this.setState({currentOffer: offer});
  }

  _handlePlaceCardMouseLeave() {
    this.setState({currentOffer: null});
  }

  render() {
    const {offers, cardClass} = this.props;

    return (
      offers.map((offer) => (
        <OfferCard
          handlePlaceCardMouseEnter = {this._handlePlaceCardMouseEnter}
          handlePlaceCardMouseLeave = {this._handlePlaceCardMouseLeave}
          key={offer.id}
          offer={offer}
          cardClass={cardClass}
        />
      ))
    );
  }
}

OffersList.propTypes = {
  cardClass: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

const mapStateToMainProps = ({currentOffers}) => ({
  offers: currentOffers,
});

const mapStateToNearestsProps = ({currentOffers}) => {

  return {
    offers: currentOffers,
  };
};

export const MainOffersList = connect(mapStateToMainProps)(OffersList);
export const NearestsOffersList = connect(mapStateToNearestsProps)(OffersList);

export default OffersList;
