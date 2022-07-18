const getRandomInteger = (min, max) => {
  const minIsPositive = min >= 0;
  const maxIsPositive = max >= 0;

  if (!(minIsPositive && maxIsPositive)) {
    throw new Error('Диапазон может быть только положительный, включая ноль');
  }
  if (min >= max || min === max) {
    throw new Error('Значение «до» меньшее, чем значение «от», или равное ему');
  }

  return Math.floor(Math.random() * (max - min) + min);
};
getRandomInteger(0, 7);

const getRandomFloat = (min, max, fixNumberSigns = 2) => {
  const minIsPositive = min >= 0;
  const maxIsPositive = max >= 0;

  if (!(minIsPositive && maxIsPositive)) {
    throw new Error('Диапазон может быть только положительный, включая ноль');
  }
  if (min >= max || min === max) {
    throw new Error('Значение «до» меньшее, чем значение «от», или равное ему');
  }
  return +(Math.random() * (max - min) + min).toFixed(fixNumberSigns);
};

getRandomFloat(1.1, 1.5, 2);

const OFFERS_LENGTH = 10;
const OFFER_TITLE = [
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
const getRandomArrayItem = (array) => array[getRandomInteger(0, array.length)];
const mixArray = (array) => {
  const newArr = [...array];

  for (let i = newArr.length - 1; i > 0; i--) {
    const num = Math.floor(Math.random() * (i + 1));
    const buffer = newArr[num];
    newArr[num] = newArr[i];
    newArr[i] = buffer;
  }

  return newArr;
};
const getArrayRandomLength = function (array) {
  const newArray = [...array];

  return mixArray(newArray).slice(0, getRandomInteger(1, newArray.length - 1));
};
const generateOffer = (index) => {
  const locationLat = getRandomFloat(35.65, 35.7, 5);
  const locationLng = getRandomFloat(139.7, 139.8, 5);
  const fileNameIndex = index + 1;

  return {
    author: {
      avatar: `img/avatars/user${
        fileNameIndex < 10 ? `0${fileNameIndex}` : fileNameIndex
      }.png`,
    },
    offer: {
      title: getRandomArrayItem(OFFER_TITLE),
      address: `${locationLat}, ${locationLng}`,
      price: getRandomInteger(1, 10000),
      type: getRandomArrayItem(OFFER_TYPES),
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 5),
      checkin: getRandomArrayItem(OFFER_TIMES),
      checkout: getRandomArrayItem(OFFER_TIMES),
      features: getArrayRandomLength(OFFER_FEATURES),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, porro.',
      photos: getArrayRandomLength(OFFER_PHOTOS),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

const generateData = (offersLength) => Array.from({ length: offersLength }).map((el, i) => generateOffer(i));
generateData(OFFERS_LENGTH);
