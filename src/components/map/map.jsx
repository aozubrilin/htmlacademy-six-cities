import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import leaflet from "leaflet";
import {connect} from "react-redux";
import withSpinner from "../../hocs/with-spinner/with-spinner";
import {getCurrentOffers, getNearOffers, getCurrentOffer, getActiveOfferId,
  getIsLoadedOffers, getCity, getIsLoadedNearOffers} from "../../store/selectors";

const Map = (props) => {
  const {offers, activeOfferId, currentCity} = props;
  const map = useRef(null);
  const mapRef = useRef(null);
  let group = null;

  useEffect(() => {
    initMap();
    return () => {
      map.current.remove();
    };
  }, [currentCity]);

  useEffect(() => {
    addPins();
  }, [offers, activeOfferId]);

  const initMap = () => {
    const [firstOffer] = offers;
    const cityCentr = firstOffer.city.coordinates;

    const zoom = firstOffer.city.zoom;
    map.current = leaflet.map(mapRef.current, {
      center: cityCentr,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.current.setView(cityCentr, zoom);

    leaflet
     .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
       attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
     })
     .addTo(map.current);
  };

  const addPins = () => {
    group = leaflet.layerGroup().addTo(map.current);
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    offers.forEach(({coordinates, id}) => {
      const currentIcon = activeOfferId === id ? activeIcon : icon;
      leaflet
      .marker(coordinates, {icon: currentIcon})
      .addTo(group);
    });
  };

  return <div id="map" ref={mapRef} style={{height: `100%`}}/>;
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeOfferId: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToMainProps = (state) => ({
  offers: getCurrentOffers(state),
  activeOfferId: getActiveOfferId(state),
  isLoading: getIsLoadedOffers(state),
  currentCity: getCity(state),
});

const mapStateToNearestsProps = (state) => ({
  offers: [...getNearOffers(state), getCurrentOffer(state)],
  activeOfferId: getActiveOfferId(state),
  isLoading: getIsLoadedNearOffers(state),
  currentCity: getCity(state),
});

export const MainMap = connect(mapStateToMainProps)(withSpinner(Map));
export const OfferMap = connect(mapStateToNearestsProps)(withSpinner(Map));
export default Map;
