export default [
  {
    id: 0,
    city: `Amsterdam`,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    type: `Apartment`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/room.jpg`
    ],
    rating: 1,
    bedroomsCount: 1,
    adultsCount: 1,
    price: 100,
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`
    ],
    host: {
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
      isProUser: true,
    },
    isPremium: true,
    isFavorite: true,
  },
  {
    id: 1,
    city: `Cologne`,
    title: `Wood and stone place`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Room`,
    images: [
      `img/apartment-02.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-02.jpg`,
    ],
    rating: 2,
    bedroomsCount: 2,
    adultsCount: 2,
    price: 200,
    features: [
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isProUser: false,
    },
    isPremium: false,
    isFavorite: false,
  },
  {
    id: 2,
    city: `Brussels`,
    title: `Canal View Prinsengracht`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `House`,
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`
    ],
    rating: 3,
    bedroomsCount: 3,
    adultsCount: 3,
    price: 300,
    features: [
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`
    ],
    host: {
      name: `Ann`,
      avatar: `img/avatar.svg`,
      isProUser: false,
    },
    isPremium: true,
    isFavorite: false,
  },
  {
    id: 3,
    city: `Dusseldorf`,
    title: `White castle`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    type: `Hotel`,
    images: [
      `img/room.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-01.jpg`
    ],
    rating: 4,
    bedroomsCount: 4,
    adultsCount: 4,
    price: 400,
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`
    ],
    host: {
      name: `Bob`,
      avatar: `img/avatar.svg`,
      isProUser: true,
    },
    isPremium: false,
    isFavorite: true,
  }
];

