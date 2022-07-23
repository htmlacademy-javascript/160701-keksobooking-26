import { generateData, generateCard } from './generate.js';
import { OFFERS_LENGTH } from './data.js';
import './form.js';

const container = document.querySelector('#map-canvas');
const offersArray = generateData(OFFERS_LENGTH);

offersArray.forEach((offer) => {
  const cardElement = generateCard(offer);

  container.appendChild(cardElement);
});
