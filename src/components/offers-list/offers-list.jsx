import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import OfferCard from "../offer-card/offer-card";
import {connect} from "react-redux";
import {getCurrentOffers, getIsLoadedOffers, getNearOffers, getIsLoadedNearOffers} from "../../store/selectors";
import withSpinner from "../../hocs/with-spinner/with-spinner";


const OffersList = ({offers, cardClass}) => {

  return (
    offers.map((offer, i) => (
      <OfferCard
        key={`${offer.city.name}-${offer.id}-${i}`}
        offer={offer}
        cardClass={cardClass}
      />
    ))
  );
};

OffersList.propTypes = {
  cardClass: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  isLoading: PropTypes.bool,
};

const mapStateToMainProps = (state) => ({
  offers: getCurrentOffers(state),
  isLoading: getIsLoadedOffers(state),
});

const mapStateToNearestsProps = (state) => ({
  offers: getNearOffers(state),
  isLoading: getIsLoadedNearOffers(state),
});


export const MainOffersList = connect(mapStateToMainProps)(withSpinner(OffersList));
export const NearestsOffersList = connect(mapStateToNearestsProps)(withSpinner(OffersList));

export default OffersList;
