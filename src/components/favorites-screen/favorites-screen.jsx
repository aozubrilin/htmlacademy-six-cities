import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import FavoritesCityList from "../favorites-city-list/favorites-city-list";
import Header from "../header/header";
import Footer from "../footer/footer";
import {connect} from "react-redux";
import {fetchFavoriteOffers} from "../../store/api-actions";


class FavoritesScreen extends PureComponent {

  componentDidMount() {
    const {loadFavoriteOffers} = this.props;
    loadFavoriteOffers();
  }

  render() {
    const {favoritesOffers} = this.props;
    return (
      <div className="page">
        <Header/>
        <main className="page__main page__main--favorites">
          {favoritesOffers.length === 0 ?
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
                  offers={favoritesOffers}
                />
              </section>
            </div>
          }
        </main>
        <Footer/>
      </div>
    );
  }
}

FavoritesScreen.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  loadFavoriteOffers: PropTypes.func.isRequired,
};

const mapStateToProps = ({data}) => ({
  favoritesOffers: data.favoriteOffers,
});

const mapDispatchToProps = ((dispatch) => ({
  loadFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  },
}));

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
