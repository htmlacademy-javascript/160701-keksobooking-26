import { generateMapError } from './generate.js';
import { showPopup } from './popup.js';

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
const sendForm = async (form) => {
  let response;

  try {
    response = await fetch(URL_UPLOAD, {
      method: 'POST',
      body: new FormData(form),
    });
    if (response.status === 200) {
      showPopup('success');
    }
  } catch (error) {
    showPopup('error');
  }
};
export { getPoints, sendForm };
