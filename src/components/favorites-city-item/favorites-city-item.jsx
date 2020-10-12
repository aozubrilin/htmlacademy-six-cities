import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import FavoritesOfferList from "../favorites-offer-list/favorites-offer-list";

const FavoritesCityItem = ({city, offers}) => {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <FavoritesOfferList
        offers={offers}
      />
    </li>
  );
};

FavoritesCityItem.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired
};

export default FavoritesCityItem;
