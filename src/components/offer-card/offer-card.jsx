import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {offerPropTypes} from "../../utils/prop-type";
import {getRating} from "../../utils/utils";
import {OfferCardClass} from "../../const";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";

const OfferCard = ({offer, cardClass, onChangeOfferId}) => {
  const {id, title, type, images, rating, price, isPremium, isFavorite} = offer;
  const [firstImage] = images;

  const isFavoriteScreen = cardClass === OfferCardClass.FAVORITE;
  const ratingPercent = getRating(rating);

  return (
    <article
      className={`${cardClass === `cities` ? `${cardClass}__place-card` : `${cardClass}__card`} place-card `}
      onMouseEnter={() => {
        onChangeOfferId(offer.id);
      }}
      onMouseLeave={() => {
        onChangeOfferId(-1);
      }}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}

      <div className={`${cardClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image"
            src={firstImage}
            width={isFavoriteScreen ? `150` : `260`}
            height={isFavoriteScreen ? `110` : `200`}
            alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite && `place-card__bookmark-button--active`}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{`${isFavorite ? `In` : `To`} bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  cardClass: PropTypes.string.isRequired,
  offer: offerPropTypes,
  onChangeOfferId: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeOfferId(offerId) {
    dispatch(ActionCreator.setActiveOfferId(offerId));
  },
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
