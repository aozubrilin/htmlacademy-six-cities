import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../store/selectors";
import {AppRoute} from "../../const";
import {changeFavoriteStatus, fetchFavoriteOffers} from "../../store/api-actions";
import FavoriteButtonContent from "../favorite-buttton-content/favorite-buttton-content";

const FavoriteButton = ({offerId, isAuthorizedStatus, isFavorite, onChangeFavoriteSatus, buttonProperty}) => {
  const {styleClass} = buttonProperty;

  const handleFavoriteClick = (evt) =>{
    evt.preventDefault();
    onChangeFavoriteSatus(offerId, isFavorite ? 0 : 1);
  };

  return isAuthorizedStatus ? (
    <button
      className={`${styleClass}__bookmark-button ${isFavorite ? `${styleClass}__bookmark-button--active` : ``} button`}
      type="button"
      onClick={handleFavoriteClick}
    >
      <FavoriteButtonContent
        buttonProperty={buttonProperty}
        isFavorite={isFavorite}
      />
    </button>
  ) : (
    <Link to={AppRoute.LOGIN}
      className={`${styleClass}__bookmark-button ${isFavorite ? `${styleClass}__bookmark-button--active` : ``} button`}
      type="button"
    >
      <FavoriteButtonContent
        buttonProperty={buttonProperty}
        isFavorite={isFavorite}
      />
    </Link>
  );
};

FavoriteButton.propTypes = {
  offerId: PropTypes.number.isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onChangeFavoriteSatus: PropTypes.func.isRequired,
  buttonProperty: PropTypes.exact({
    styleClass: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorizedStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFavoriteSatus(id, isFavorite) {
    dispatch(changeFavoriteStatus(id, isFavorite));
    dispatch(fetchFavoriteOffers());
  },
});

export {FavoriteButton};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
