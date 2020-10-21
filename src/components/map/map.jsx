import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import leaflet from "leaflet";

const CityCoordinate = {
  BRUSSELS: {coordinates: [50.85, 4.3]},
  PARIS: {coordinates: [48.86, 2.34]},
  AMSTERDAM: {coordinates: [52.38333, 4.9]},
  COLOGNE: {coordinates: [50.933, 6.95]},
  HAMBURG: {coordinates: [53.56, 10.015]},
  DUSSELDORF: {coordinates: [51.22, 6.78]},
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    this._map.remove();
    this.init();
  }

  init() {
    const {offers, city} = this.props;
    const cityCentr = CityCoordinate[city.toUpperCase()].coordinates;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    this._map = leaflet.map(this._mapRef.current, {
      center: cityCentr,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(cityCentr, zoom);

    leaflet
  .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  })
  .addTo(this._map);

    offers.forEach(({coordinates}) => {
      leaflet
      .marker(coordinates, {icon})
      .addTo(this._map);
    });
  }

  render() {
    return (
      <div ref={this._mapRef} style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired,
};

export default Map;
