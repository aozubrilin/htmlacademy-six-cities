import React from "react";
import PropTypes from "prop-types";
import {MainOffersList} from "../offers-list/offers-list";
import {offerPropTypes} from "../../utils/prop-type";
import {OfferCardClass} from "../../const";
import {MainMap} from "../map/map";
import CitiesList from "../cities-list/cities-list";
import Sorting from "../sorting/sorting";
import Header from "../header/header";
import withOpen from "../../hocs/withOpen/withOpen";
import {connect} from "react-redux";

const SortingWrapper = withOpen(Sorting);

const Main = ({currentOffers, city}) => {
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {city}</b>
              <SortingWrapper/>

              <div className="cities__places-list places__list tabs__content">
                <MainOffersList
                  offers={currentOffers}
                  cardClass={OfferCardClass.MAIN}/>
              </div>

            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <MainMap />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  currentOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired
};

const mapStateToProps = ({city, currentOffers}) => ({
  city,
  currentOffers
});

export {Main};
export default connect(mapStateToProps)(Main);
