import {
  loadOffers,
  loadReviews,
  requireAuthorization,
  loadNearOffers,
  loadFavoriteOffers,
  loadCurrentOffer,
  loadUser,
  setIsLoadedNearOffers,
  setIsLoadedCurrentOffer,
  setFetchMessage,
  setIsLoadedOffers,
  setIsLoadedReviews,
  setIsLoadedFavoriteOffers,
  updateFavoriteStatus,
} from "./action";
import {APIRoute, AuthorizationStatus} from "../const";
import {getAdaptedOffers, adaptToClientOffer, getAdaptedReviews, adaptToClientUser, adaptReviewtoServer} from "../utils/adapters";


export const fetchOffersList = () => (dispatch, _getState, api) => {
  dispatch(setIsLoadedOffers(true));
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      dispatch(loadOffers(getAdaptedOffers(data)));
    })
    .catch((err) => {
      dispatch(setFetchMessage(`Ошибка загрузки предложений.`));
      throw err;
    });
  dispatch(setIsLoadedOffers(false));
};

export const fetchIdOffer = (offerId) => (dispatch, _getState, api) => {
  dispatch(setIsLoadedCurrentOffer(true));
  api.get(`${APIRoute.OFFERS}/${offerId}`)
    .then(({data}) =>{
      dispatch(loadCurrentOffer(adaptToClientOffer(data)));
    })
    .catch((err) => {
      dispatch(setFetchMessage(`Ошибка загрузки предложения.`));
      throw err;
    });
  dispatch(setIsLoadedCurrentOffer(false));
};

export const fetchReviews = (offerId) => (dispatch, _getState, api) => {
  dispatch(setIsLoadedReviews(true));
  api.get(`${APIRoute.COMMENTS}/${offerId}`)
    .then(({data}) => {
      dispatch(loadReviews(getAdaptedReviews(data)));
    })
    .catch((err) => {
      dispatch(setFetchMessage(`Ошибка загрузки комментарии.`));
      throw err;
    });
  dispatch(setIsLoadedReviews(false));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUser(adaptToClientUser(data)));
    })
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
  .then(({data}) => {
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(loadUser(adaptToClientUser(data)));
  })
  .catch((err) => {
    dispatch(setFetchMessage(err.message));
    throw err;
  })
);

export const fetchNearOffers = (offerId) => (dispatch, _getState, api) => {
  dispatch(setIsLoadedNearOffers(true));
  api.get(`${APIRoute.OFFERS}/${offerId}/nearby`)
    .then(({data}) => {
      dispatch(loadNearOffers(getAdaptedOffers(data)));
    })
    .catch((err) => {
      dispatch(setFetchMessage(`Ошибка загрузки предложений поблизости.`));
      throw err;
    });
  dispatch(setIsLoadedNearOffers(false));
};

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => {
  dispatch(setIsLoadedFavoriteOffers(true));
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(loadFavoriteOffers(getAdaptedOffers(data)));
    })
    .catch((err) => {
      throw err;
    });
  dispatch(setIsLoadedFavoriteOffers(false));
};

export const changeFavoriteStatus = (offerId, favoriteStatus) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${offerId}/${favoriteStatus}`)
    .then(({data}) => {
      dispatch(updateFavoriteStatus(adaptToClientOffer(data)));
    })
    .catch((err) => {
      dispatch(setFetchMessage(`Ошибка.Предложение не добавлено в избранное.`));
      throw err;
    })
);

export const sendReview = (offerId, review) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.COMMENTS}/${offerId}`, adaptReviewtoServer(review))
    .then(({data}) => {
      dispatch(loadReviews(getAdaptedReviews(data)));
    })
    .catch((err) => {
      dispatch(setFetchMessage(`Ошибка отправки комментария.`));
      throw err;
    });
};
