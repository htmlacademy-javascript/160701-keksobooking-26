import { Random, ArrayEnhanced } from './util.js';
import {
  OFFERS_LENGTH,
  OFFER_TITLE,
  OFFER_TYPES,
  OFFER_TIMES,
  OFFER_FEATURES,
  OFFER_PHOTOS,
} from './data.js';

const generateOffer = (i) => {
  const locationLat = Random.float(35.65, 35.7, 5);
  const locationLng = Random.float(139.7, 139.8, 5);

  return {
    author: {
      avatar: `img/avatars/user${String(i).padStart(2, 0)}.png`,
    },
    offer: {
      title: Random.itemFromArray(OFFER_TITLE),
      address: `${locationLat}, ${locationLng}`,
      price: Random.int(1, 10000),
      type: Random.itemFromArray(OFFER_TYPES),
      rooms: Random.int(1, 5),
      guests: Random.int(1, 5),
      checkin: Random.itemFromArray(OFFER_TIMES),
      checkout: Random.itemFromArray(OFFER_TIMES),
      features: new ArrayEnhanced(...OFFER_FEATURES).randomLength(),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, porro.',
      photos: new ArrayEnhanced(...OFFER_PHOTOS).randomLength(),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

const generateData = (offersLength) =>
  Array.from({ length: offersLength }).map((el, i) => generateOffer(i));
generateData(OFFERS_LENGTH);
