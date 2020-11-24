import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import {getUniqueCities} from "../../utils/utils";
import FavoritesCityItem from "../favorites-city-item/favorites-city-item";
import withSpinner from "../../hocs/with-spinner/with-spinner";

const FavoritesCityList = ({offers}) => {
  const uniqueCities = getUniqueCities(offers);

  return (
    <ul className="favorite__list">
      {uniqueCities.map((city, i) => {
        const offersByСity = offers.filter((offer) => offer.city.name === city);
        return (
          <FavoritesCityItem
            city={city}
            offers={offersByСity}
            key={`${city}-${i}`}
          />
        );
      })}
    </ul>
  );
};

FavoritesCityList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default withSpinner(FavoritesCityList);

