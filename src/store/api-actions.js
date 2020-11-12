import {loadOffers, loadReviews, requireAuthorization, loadNearOffers, loadFavoriteOffers, loadCurrentOffer} from "./action";
import {APIRoute, AuthorizationStatus} from "../const";
import {getAdaptedOffers, adaptToClientOffer, getAdaptedReviews} from "../utils/adapters";


export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) =>{
      dispatch(loadOffers(getAdaptedOffers(data)));
    })
);

export const fetchIdOffer = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${offerId}`)
    .then(({data}) =>{
      dispatch(loadCurrentOffer(adaptToClientOffer(data)));
    })
);

export const fetchReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${offerId}`)
    .then(({data}) =>{
      dispatch(loadReviews(getAdaptedReviews(data)));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

export const fetchNearOffers = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${offerId}/nearby`)
    .then(({data}) =>{
      dispatch(loadNearOffers(getAdaptedOffers(data)));
    })
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) =>{
      dispatch(loadFavoriteOffers(getAdaptedOffers(data)));
    })
);

