import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import {reviewPropTypes} from "../../utils/prop-type";
import {getRating} from "../../utils/utils";
import ReviewsList from "../rewiews-list/rewiews-list";
import ReviewForm from "../review-form/review-form";
import {OfferMap} from "../map/map";
import withSpinner from "../../hocs/with-spinner/with-spinner";


const MAX_IMAGE_COUNT = 6;

const OfferProperty = ({offer, offerReviews, isAuthorizedStatus, nearOffers, isLoadedReviews, onChangeFavoriteSatus}) => {
  const {
    id,
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
    isFavorite,
  } = offer;

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">

          {images.slice(0, MAX_IMAGE_COUNT).map((image, i) =>
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


            <button className={`property__bookmark-button button  ${isFavorite && `place-bookmark-button--active`}`}
              type="button"
              onClick={() => {
                onChangeFavoriteSatus(id, isFavorite ? 0 : 1);
              }}
            >
              <svg className={`${isFavorite ? `property__bookmark-icon--active` : `property__bookmark-icon`}`} width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{`${isFavorite ? `In` : `To`} bookmarks`}</span>
            </button>


          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `${getRating(rating)}%`}}></span>
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
              {features.map((feature, i) =>
                <li className="property__inside-item" key={`${i}-${feature[i]}`} >
                  {feature}
                </li>
              )}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={host.isProUser ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`}>
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
            <ReviewsList
              reviews={offerReviews}
              isLoading={isLoadedReviews}
            />
            {isAuthorizedStatus ?
              <ReviewForm
                offerId={id}
              /> : false}
          </section>
        </div>
      </div>
      {nearOffers.length !== 0 &&
      <section className="property__map map">
        <OfferMap/>
      </section>}
    </section>
  );
};

OfferProperty.propTypes = {
  offer: offerPropTypes,
  offerReviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  nearOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
  isLoadedReviews: PropTypes.bool,
  onChangeFavoriteSatus: PropTypes.func,
};


export default (withSpinner(OfferProperty));


