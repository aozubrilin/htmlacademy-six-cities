export const STAR_TO_PERSENT = 20;

export const OfferCardClass = {
  MAIN: `cities`,
  NEAR: `near-places`,
  FAVORITE: `favorites`,
};

export const CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

export const RviewSymbolLenght = {
  MAX: 300,
  MIN: 50,
};

export const SortType = {
  POPULAR: `Popular`,
  TO_HIGHT: `Price: low to high`,
  TO_LOW: `Price: high to low`,
  TOP_RATE: `Top rated first`,
};

export const ratingReview = [
  { title: `perfect`, value: `5` },
  { title: `good`, value: `4` },
  { title: `not bad`, value: `3` },
  { title: `badly`, value: `2` },
  { title: `terribly`, value: `1` },
];

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const APIRoute = {
  OFFERS: `/hotels`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,
};

export const HttpCode = {
  UNAUTHORIZED: 401,
};

export const AppRoute = {
  MAIN: `/htmlacademy-six-cities/`,
  OFFER: `/htmlacademy-six-cities/offer`,
  LOGIN: `/htmlacademy-six-cities/login`,
  FAVORITES: `/htmlacademy-six-cities/favorites`,
};

export const favoriteButtonProperty = {
  propertyCard: {
    styleClass: `property`,
    width: `31`,
    height: `33`,
  },
  offerCard: {
    styleClass: `place-card`,
    width: `18`,
    height: `19`,
  },
};
