import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {MainOffersList} from "../offers-list/offers-list";
import {offerPropTypes} from "../../utils/prop-type";
import {OfferCardClass} from "../../const";
import {MainMap} from "../map/map";
import CitiesList from "../cities-list/cities-list";
import Sorting from "../sorting/sorting";
import Header from "../header/header";
import MainEmpty from "../main-empty/main-empty";
import {connect} from "react-redux";
import {getCurrentOffers} from "../../store/selectors";
import withAlertDialog from "../../hocs/with-alert-dialog/with-alert-dialog";
import {getCity, getIsLoadedOffers} from "../../store/selectors";


const Main = ({currentOffers, city, isOffersEmpty}) => {
  return (
    <div className={`page page--gray page--main ${isOffersEmpty ? `page__main--index-empty` : ``}`}>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <div className={`cities__places-container container ${isOffersEmpty ? `cities__places-container--empty` : ``}`}>
            {isOffersEmpty ?
              <MainEmpty city={city}/> :
              <Fragment>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{currentOffers.length} places to stay in {city}</b>
                  <Sorting/>
                  <div className="cities__places-list places__list tabs__content">
                    <MainOffersList
                      cardClass={OfferCardClass.MAIN}
                    />
                  </div>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <MainMap />
                  </section>
                </div>
              </Fragment>
            }
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  currentOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  isOffersEmpty: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentOffers: getCurrentOffers(state),
  city: getCity(state),
  isOffersEmpty: getCurrentOffers(state).length === 0,
  isLoadedOffers: getIsLoadedOffers(state),
});

export {Main};
export default connect(mapStateToProps)(withAlertDialog(Main));
