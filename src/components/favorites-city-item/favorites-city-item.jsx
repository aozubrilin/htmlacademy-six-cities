import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import OffersList from "../offers-list/offers-list";
import {OfferCardClass} from "../../const";

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
      <div className="favorites__places">
        <OffersList
          offers={offers}
          cardClass={OfferCardClass.FAVORITE}
        />
      </div>
    </li>
  );
};

FavoritesCityItem.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired
};

export default FavoritesCityItem;
