import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import {reviewPropTypes} from "../../utils/prop-type";
import {NearestsOffersList} from "../offers-list/offers-list";
import Header from "../header/header";
import {OfferCardClass} from "../../const";
import {fetchIdOffer, fetchReviews, fetchNearOffers, changeFavoriteStatus, fetchFavoriteOffers} from "../../store/api-actions";
import {connect} from "react-redux";
import {getSortedReviews, getCurrentOffer, getNearOffers, getAuthorizationStatus, getIsLoadedRviews, getIsLoadedCurrentOffer} from "../../store/selectors";
import OfferProperty from "../offer-property/offer-property";
import withAlertDialog from "../../hocs/with-alert-dialog/with-alert-dialog";


const OfferScreen = (props) => {
  const {offer, offerReviews, isAuthorizedStatus, nearOffers, isLoadedCurrentOffer, isLoadedReviews,
    onChangeFavoriteSatus, offerId, loadDataAction} = props;

  useEffect(() => {
    loadDataAction(offerId);
  }, [offerId]);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        {offer.id && <OfferProperty
          isLoading={isLoadedCurrentOffer}
          offer={offer}
          offerReviews={offerReviews}
          isAuthorizedStatus={isAuthorizedStatus}
          nearOffers={nearOffers}
          isLoadedReviews={isLoadedReviews}
          onChangeFavoriteSatus={onChangeFavoriteSatus}
        />}

        {nearOffers.length !== 0 &&
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <NearestsOffersList cardClass={OfferCardClass.NEAR} />
              </div>
            </section>
          </div>}
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  offerId: PropTypes.number,
  offer: PropTypes.any.isRequired,
  offerReviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  loadDataAction: PropTypes.func.isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
  nearOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  isLoadedReviews: PropTypes.bool,
  isLoadedCurrentOffer: PropTypes.bool.isRequired,
  onChangeFavoriteSatus: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  offerReviews: getSortedReviews(state),
  offer: getCurrentOffer(state),
  offerId: Number(ownProps.match.params.id),
  nearOffers: getNearOffers(state),
  isAuthorizedStatus: getAuthorizationStatus(state),
  isLoadedReviews: getIsLoadedRviews(state),
  isLoadedCurrentOffer: getIsLoadedCurrentOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadDataAction(offerId) {
    dispatch(fetchIdOffer(offerId));
    dispatch(fetchNearOffers(offerId));
    dispatch(fetchReviews(offerId));
  },
  onChangeFavoriteSatus(id, isFavorite) {
    dispatch(changeFavoriteStatus(id, isFavorite));
    dispatch(fetchFavoriteOffers());
  },
});

export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(withAlertDialog(OfferScreen));
