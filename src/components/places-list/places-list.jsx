import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import PlaceCard from "../place-card/place-card";

class PlacesList extends PureComponent {
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
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer) => (
            <PlaceCard
              handlePlaceCardMouseEnter = {this._handlePlaceCardMouseEnter}
              handlePlaceCardMouseLeave = {this._handlePlaceCardMouseLeave}
              key={offer.id}
              offer={offer}
            />
          ))
        }
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default PlacesList;
