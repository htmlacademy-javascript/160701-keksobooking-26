const OFFERS_LENGTH = 10;
const OFFER_TITLES = [
  'Большая уютная квартира',
  'Маленькая неуютная квартира',
  'Огромный прекрасный дворец',
  'Маленький ужасный дворец',
  'Красивый гостевой домик',
  'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря',
  'Неуютное бунгало по колено в воде',
];
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const OFFER_TIMES = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const OfferTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const OfferTypePrices = {
  bungalo: {
    name: 'Бунгало',
    price: '0',
  },
  flat: {
    name: 'Квартира',
    price: '1000',
  },
  hotel: {
    name: 'Отель',
    price: '3000',
  },
  house: {
    name: 'Дом',
    price: '5000',
  },
  palace: {
    name: 'Дворец',
    price: '10000',
  },
};
export {
  OFFERS_LENGTH,
  OFFER_TITLES,
  OFFER_TYPES,
  OFFER_TIMES,
  OFFER_FEATURES,
  OFFER_PHOTOS,
  OfferTypes,
  OfferTypePrices,
};
