import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {fetchOffersList, checkAuth, fetchFavoriteOffers} from "./store/api-actions";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {redirect} from "./store/middlewares/redirect";
import {requireAuthorization} from "./store/action";
import {AuthorizationStatus} from "./const";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api), redirect)
    )
);

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());
store.dispatch(fetchFavoriteOffers());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
