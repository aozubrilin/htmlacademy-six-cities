import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import {reviewPropTypes} from "../../utils/prop-type";
import {getRating} from "../../utils/utils";
import {NearestsOffersList} from "../offers-list/offers-list";
import ReviewsList from "../rewiews-list/rewiews-list";
import ReviewForm from "../review-form/review-form";
import Header from "../header/header";
import {OfferMap} from "../map/map";
import {OfferCardClass} from "../../const";
import withReviewForm from "../../hocs/with-review-form/with-review-form";
import {connect} from "react-redux";

const MAX_IMAGE_COUNT = 6;
const MAX_REVIEWS_COUNT = 3;

const OfferScreen = ({offer, offerReviews}) => {

  const {
    title,
    description,
    type,
    images,
    bedroomsCount,
    adultsCount,
    rating,
    price,
    features,
    host,
    isPremium,
    isFavorite
  } = offer;

  const ratingPercent = getRating(rating);
  const offerImages = images.slice(0, MAX_IMAGE_COUNT);
  const ReviewFormWrapper = withReviewForm(ReviewForm);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">

              {offerImages.map((image, i) =>
                <div className="property__image-wrapper" key={`${i}-${image[i]}`} >
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              )}

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ``}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                {isFavorite ?
                  <button className="property__bookmark-button place-bookmark-button--active button" type="button">
                    <svg className="place-card__bookmark-button--active" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                  :
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>}
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ratingPercent}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomsCount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {adultsCount} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {features.map((feature, i)=>
                    <li className="property__inside-item" key={`${i}-${feature[i]}`} >
                      {feature}
                    </li>
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={host.isProUser.super ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot;
                  <span className="reviews__amount">
                    {offerReviews.length}
                  </span>
                </h2>
                <ReviewsList reviews={offerReviews} />
                <ReviewFormWrapper/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <OfferMap />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <NearestsOffersList cardClass={OfferCardClass.NEAR} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = ({offers, reviews}, ownProps) => {
  const offer = offers.find((item) => item.id === Number(ownProps.match.params.id));
  const offerReviews = reviews.sort((a, b) => b.date - a.date).slice(0, MAX_REVIEWS_COUNT);

  return {
    offerReviews,
    offer,
  };
};

OfferScreen.propTypes = {
  offer: offerPropTypes,
  offerReviews: PropTypes.arrayOf(reviewPropTypes).isRequired
};

export {OfferScreen};
export default connect(mapStateToProps)(OfferScreen);
