import { Validation } from './data.js';

const sliderElement = document.querySelector('.ad-form__slider');
const priceInput = document.querySelector('#price');
const minPriceValue = Number(priceInput.min);
const typeSelect = document.querySelector('#type');

noUiSlider.create(sliderElement, {
  range: {
    min: Validation.PRICE.MIN_PRICE,
    max: Validation.PRICE.MAX_PRICE,
  },
  start: minPriceValue,
  step: 1,
  connect: 'lower',
  format: {
    to: (value) => value.toFixed(0),
    from: (value) => parseFloat(value),
  },
});

sliderElement.noUiSlider.on('update', () => {
  priceInput.value = sliderElement.noUiSlider.get();
});

typeSelect.addEventListener('change', () => {
  const minPrice = Number(priceInput.min);

  sliderElement.noUiSlider.updateOptions({
    start: minPrice,
  });
});

priceInput.addEventListener('input', ({ target }) => {
  const value = Number(target.value);

  sliderElement.noUiSlider.updateOptions({
    start: value,
  });
});
