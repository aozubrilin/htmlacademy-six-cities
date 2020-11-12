import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import OfferCard from "../offer-card/offer-card";
import {connect} from "react-redux";
import {getCurrentOffers} from "../../store/selectors";


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
};

const mapStateToMainProps = ({data, app}) => ({
  offers: getCurrentOffers({data, app}),
});

const mapStateToNearestsProps = ({data}) => {
  const nearOffers = data.nearOffers;

  return {
    offers: nearOffers,
  };
};


export const MainOffersList = connect(mapStateToMainProps)(OffersList);
export const NearestsOffersList = connect(mapStateToNearestsProps)(OffersList);

export default OffersList;
