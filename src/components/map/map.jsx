import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-type";
import leaflet from "leaflet";
import {connect} from "react-redux";
import {getCurrentOffers} from "../../store/selectors";
import withSpinner from "../../hocs/with-spinner/with-spinner";


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
    const {offers, activeOfferId} = this.props;
    const [firstOffer] = offers;
    const cityCentr = firstOffer.city.coordinates;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    const zoom = firstOffer.city.zoom;
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

    offers.forEach(({coordinates, id}) => {
      const currentIcon = activeOfferId === id ? activeIcon : icon;
      leaflet
      .marker(coordinates, {icon: currentIcon})
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
  activeOfferId: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToMainProps = ({data, app}) => ({
  offers: getCurrentOffers({data, app}),
  activeOfferId: app.activeOfferId,
  isLoading: data.isLoadedOffers,
});

const mapStateToNearestsProps = ({data, app}) => ({
  offers: data.nearOffers.slice(0, 3),
  activeOfferId: app.activeOfferId,
  isLoading: data.isLoadedNearOffers,
});


export const MainMap = connect(mapStateToMainProps)(withSpinner(Map));
export const OfferMap = connect(mapStateToNearestsProps)(withSpinner(Map));

export default Map;
