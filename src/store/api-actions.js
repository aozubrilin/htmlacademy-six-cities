import {loadOffers, requireAuthorization} from "./action";
import {APIRoute, AuthorizationStatus} from "../const";
import {getAdaptedOffers} from "../utils/adapters";


export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) =>{
      const offers = getAdaptedOffers(data);
      dispatch(loadOffers(offers));
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
