import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import {reviewPropTypes} from "../../utils/prop-type";
import {NearestsOffersList} from "../offers-list/offers-list";
import Header from "../header/header";
import {OfferCardClass, AuthorizationStatus} from "../../const";
import {fetchIdOffer, fetchReviews, fetchNearOffers} from "../../store/api-actions";
import {connect} from "react-redux";
import {getSortedReviews} from "../../store/selectors";
import OfferProperty from "../offer-property/offer-property";
import withAlertDialog from "../../hocs/with-alert-dialog/with-alert-dialog";


class OfferScreen extends PureComponent {
  componentDidMount() {
    const {offerId, loadDataAction} = this.props;
    loadDataAction(offerId);
  }

  componentDidUpdate(prevProps) {
    const {offerId, loadDataAction} = this.props;
    if (prevProps.offerId !== offerId) {
      loadDataAction(offerId);
    }
  }

  render() {
    const {offer,
      offerReviews,
      isAuthorizedStatus,
      nearOffers,
      isLoadedCurrentOffer,
      isLoadedReviews,
    } = this.props;

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
  }
}

OfferScreen.propTypes = {
  offerId: PropTypes.number,
  offer: PropTypes.any.isRequired,
  offerReviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  loadDataAction: PropTypes.func.isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
  nearOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  isLoadedReviews: PropTypes.bool,
  isLoadedCurrentOffer: PropTypes.bool.isRequired,

};

const mapStateToProps = ({data, user}, ownProps) => {
  const offerId = Number(ownProps.match.params.id);
  const offer = data.currentOffer;
  const offerReviews = getSortedReviews({data});
  const isAuthorizedStatus = user.authorizationStatus === AuthorizationStatus.AUTH;
  const nearOffers = data.nearOffers;
  const isLoadedReviews = data.isLoadedReviews;
  const isLoadedCurrentOffer = data.isLoadedCurrentOffer;

  return {
    offerReviews,
    offer,
    offerId,
    isAuthorizedStatus,
    nearOffers,
    isLoadedReviews,
    isLoadedCurrentOffer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadDataAction(offerId) {
    dispatch(fetchIdOffer(offerId));
    dispatch(fetchNearOffers(offerId));
    dispatch(fetchReviews(offerId));
  },
});


export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(withAlertDialog(OfferScreen));
