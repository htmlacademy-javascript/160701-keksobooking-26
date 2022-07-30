import { Random, ArrayEnhanced } from './util.js';
import {
  OFFERS_LENGTH,
  OFFER_TITLES,
  OFFER_TYPES,
  OFFER_TIMES,
  OFFER_FEATURES,
  OFFER_PHOTOS,
  OfferTypes,
} from './data.js';

const generateOffer = (i) => {
  const locationLat = Random.float(35.65, 35.7, 5);
  const locationLng = Random.float(139.7, 139.8, 5);

  return {
    author: {
      avatar: `img/avatars/user${String(i).padStart(2, 0)}.png`,
    },
    offer: {
      title: Random.itemFromArray(OFFER_TITLES),
      address: `${locationLat}, ${locationLng}`,
      price: Random.int(1, 10000),
      type: Random.itemFromArray(OFFER_TYPES),
      rooms: Random.int(1, 5),
      guests: Random.int(1, 5),
      checkin: Random.itemFromArray(OFFER_TIMES),
      checkout: Random.itemFromArray(OFFER_TIMES),
      features: new ArrayEnhanced(...OFFER_FEATURES).randomLength(),
      description: Random.int(0, 2)
        ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, porro.'
        : '',
      photos: new ArrayEnhanced(...OFFER_PHOTOS).randomLength(),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

const generateData = (offersLength) =>
  Array.from({ length: offersLength }).map((el, i) => generateOffer(i + 1));
generateData(OFFERS_LENGTH);

const generateCard = ({ author, offer }) => {
  const {
    title,
    address,
    price,
    type,
    description,
    features,
    photos,
    rooms,
    guests,
    checkin,
    checkout,
  } = offer;
  const cardTemplate = document.querySelector('#card').content;
  const card = cardTemplate.cloneNode(true);
  const cardWrap = document.createElement('div');

  const offerTitleElement = card.querySelector('.popup__title');
  offerTitleElement.textContent = title;

  const offerAddressElement = card.querySelector('.popup__text--address');
  offerAddressElement.textContent = address;

  const offerPriceElement = card.querySelector('.popup__text--price');
  offerPriceElement.textContent = `${price} ₽/ночь`;

  const offerTypeElement = card.querySelector('.popup__type');
  offerTypeElement.textContent = OfferTypes[type];

  const offerCapacityElement = card.querySelector('.popup__text--capacity');
  offerCapacityElement.textContent = `${rooms} комнаты для ${guests} гостей`;

  const offerTimeElement = card.querySelector('.popup__text--time');
  offerTimeElement.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  const offerFeaturesElement = card.querySelector('.popup__features');
  const offerFeaturesListElement =
    offerFeaturesElement.querySelectorAll('.popup__feature');

  if (!features) {
    offerFeaturesElement.style.display = 'none';
  } else {
    offerFeaturesListElement.forEach((featureElement) => {
      const isNecessary = features.some((featureName) =>
        featureElement.classList.contains(`popup__feature--${featureName}`),
      );
      if (!isNecessary) {
        featureElement.remove();
      }
    });
  }

  const offerDescriptionElement = card.querySelector('.popup__description');
  offerDescriptionElement.textContent = description;
  if (!description) {
    offerDescriptionElement.style.display = 'none';
  }
  const offerPhotosContainer = card.querySelector('.popup__photos');

  const offerPhotoElement = offerPhotosContainer.querySelector('.popup__photo');
  offerPhotosContainer.innerHTML = '';
  if (photos) {
    photos.forEach((photoLink) => {
      const photo = offerPhotoElement.cloneNode(true);

      photo.setAttribute('src', photoLink);
      offerPhotosContainer.appendChild(photo);
    });
  }
  const offerAvatarElement = card.querySelector('.popup__avatar');
  offerAvatarElement.setAttribute('src', author.avatar);
  cardWrap.appendChild(card);

  return cardWrap;
};
const generateMapError = (message) => {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('map__error');
  errorMessage.textContent = `${message}`;

  return errorMessage;
};
export { generateData, generateCard, generateMapError };
