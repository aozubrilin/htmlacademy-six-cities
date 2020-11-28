import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import FavoritesCityList from "../favorites-city-list/favorites-city-list";
import Header from "../header/header";
import Footer from "../footer/footer";
import {connect} from "react-redux";
import {getFavoriteOffers, getIsLoadedfavoriteOffers} from "../../store/selectors";
import withAlertDialog from "../../hocs/with-alert-dialog/with-alert-dialog";

const FavoritesScreen = ({favoriteOffers, isLoadedfavoriteOffers}) => {

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        {favoriteOffers.length === 0 ?
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
            </div>
          </section>
          :
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesCityList
                offers={favoriteOffers}
                isLoading={isLoadedfavoriteOffers}
              />
            </section>
          </div>
        }
      </main>
      <Footer/>
    </div>
  );
};

FavoritesScreen.propTypes = {
  favoriteOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  isLoadedfavoriteOffers: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state),
  isLoadedfavoriteOffers: getIsLoadedfavoriteOffers(state),
});


export {FavoritesScreen};
export default connect(mapStateToProps)(withAlertDialog(FavoritesScreen));
