export const adaptToClientOffer = (data) => {
  return {
    bedroomsCount: data.bedrooms,
    city: {
      name: data.city.name,
      coordinates: [data.city.location.latitude, data.city.location.longitude],
      zoom: data.city.location.zoom
    },
    description: data.description,
    features: data.goods,
    host: {
      avatar: data.host.avatar_url,
      id: data.host.id,
      isProUser: data.host.is_pro,
      name: data.host.name,
    },
    id: data.id,
    images: data.images,
    isFavorite: data.is_favorite,
    isPremium: data.is_premium,
    coordinates: [data.location.latitude, data.location.longitude],
    adultsCount: data.max_adults,
    previewImage: data.preview_image,
    price: data.price,
    rating: data.rating,
    title: data.title,
    type: data.type
  };
};

export const getAdaptedOffers = (dataArray) => dataArray.map((it) => adaptToClientOffer(it));

export const adaptToClientReview = (data) => {
  return {
    id: data.id,
    date: new Date(data.date),
    text: data.comment,
    rating: data.rating,
    user: {
      id: data.user.id,
      avatar: data.user.avatar_url,
      isProUser: data.user.is_pro,
      name: data.user.name,
    },
  };
};

export const getAdaptedReviews = (dataArray) => dataArray.map((it) => adaptToClientReview(it));
