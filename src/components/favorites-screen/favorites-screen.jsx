import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import FavoritesCityList from "../favorites-city-list/favorites-city-list";
import Header from "../header/header";
import Footer from "../footer/footer";
import {connect} from "react-redux";


const FavoritesScreen = ({favoritesOffers}) => {

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesCityList
              offers={favoritesOffers}
            />
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

FavoritesScreen.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

const mapStateToProps = ({offers}) => ({
  favoritesOffers: offers.filter((offer) => offer.isFavorite),
});

export {FavoritesScreen};
export default connect(mapStateToProps)(FavoritesScreen);
