import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import leaflet from "leaflet";
import {connect} from "react-redux";

const CITY = [52.38333, 4.9];

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
    const {offers} = this.props;
    const cityCentr = CITY;
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
};

const mapStateToMainProps = ({currentOffers}) => ({
  offers: currentOffers,
});

const mapStateToNearestsProps = ({offers}) => {
  const nearOffers = offers.slice(0, 3);

  return {
    offers: nearOffers,
  };
};

export const MainMap = connect(mapStateToMainProps)(Map);
export const OfferMap = connect(mapStateToNearestsProps)(Map);

export default Map;
