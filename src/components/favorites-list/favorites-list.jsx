import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import {getUniqueCities} from "../../utils/utils";
import FavoritesCityItem from "../favorites-city-item/favorites-city-item";

const FavoritesList = ({offers}) => {
  const uniqueCities = getUniqueCities(offers);

  return (
    <ul className="favorite__list">
      {uniqueCities.map((city, i) => {
        const offersByСity = offers.filter((offer) => offer.city === city);
        return (
          <FavoritesCityItem
            city={city}
            offers={offersByСity}
            key={`${city[i]}-${i}`}
          />
        );
      })}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default FavoritesList;

