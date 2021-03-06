import React from "react";
import PropTypes from "prop-types";
import {changeCity} from "../../store/action";
import {connect} from "react-redux";
import {getCity, getCities} from "../../store/selectors";


const CitiesList = ({cities, currentCity, onChangeCurrentCity}) => {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, i) => (
            <li key={`city-${i}`}
              className="locations__item"
              onClick={(evt) =>{
                evt.preventDefault();
                onChangeCurrentCity(city);
              }}>
              <a className={`locations__item-link tabs__item${
                city === currentCity && ` tabs__item--active`}`} href="#">
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeCurrentCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: getCity(state),
  cities: getCities(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCurrentCity(city) {
    dispatch(changeCity(city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

