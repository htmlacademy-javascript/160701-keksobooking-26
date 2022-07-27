import { generateMapError } from './generate.js';

const URL_UPLOAD = 'https://26.javascript.pages.academy/keksobooking/';
const URL_LOAD = 'https://26.javascript.pages.academy/keksobooking/data';

const getPoints = async () => {
  let response;

  try {
    response = await fetch(URL_LOAD);
    const points = await response.json();

    return points;
  } catch (error) {
    document.body
      .querySelector('.map')
      .insertAdjacentElement('afterbegin', generateMapError(error.message));

    return [];
  }
};

export { getPoints };
