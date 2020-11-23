import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import OfferCard from "../offer-card/offer-card";
import {connect} from "react-redux";
import {getCurrentOffers} from "../../store/selectors";
import withSpinner from "../../hocs/with-spinner/with-spinner";


const OffersList = ({offers, cardClass}) => {

  return (
    offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        cardClass={cardClass}
      />
    ))
  );
};

OffersList.propTypes = {
  cardClass: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToMainProps = ({data, app}) => ({
  offers: getCurrentOffers({data, app}),
  isLoading: data.isLoadedOffers,
});

const mapStateToNearestsProps = ({data}) => ({
  offers: data.nearOffers,
  isLoading: data.isLoadedNearOffers,
});


export const MainOffersList = connect(mapStateToMainProps)(withSpinner(OffersList));
export const NearestsOffersList = connect(mapStateToNearestsProps)(withSpinner(OffersList));

export default OffersList;
