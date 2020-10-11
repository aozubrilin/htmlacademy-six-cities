import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {offerPropTypes} from "../../utils/prop-type";
import {getRating} from "../../utils/utils";

const PlaceCard = ({offer, handlePlaceCardMouseEnter, handlePlaceCardMouseLeave}) => {
  const {title, type, images, rating, price, isPremium, isFavorite} = offer;
  const [firstImage] = images;

  const bookmarkButtonActive = isFavorite ? `place-card__bookmark-button--active` : ``;
  const ratingPercent = getRating(rating);

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => {
        handlePlaceCardMouseEnter(offer);
      }}
      onMouseLeave={() => {
        handlePlaceCardMouseLeave();
      }}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${offer.id}`}>
          <img className="place-card__image"
            src={firstImage} width="260"
            height="200"
            alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${bookmarkButtonActive}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: offerPropTypes,
  handlePlaceCardMouseEnter: PropTypes.func.isRequired,
  handlePlaceCardMouseLeave: PropTypes.func.isRequired
};

export default PlaceCard;
