import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import FavoritesOfferItem from "../favorites-offer-item/favorites-offer-item";

const FavoritesOfferList = ({offers}) => {

  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <FavoritesOfferItem
          offer={offer}
          key={offer.id}
        />
      ))}
    </div>
  );
};

FavoritesOfferList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default FavoritesOfferList;
