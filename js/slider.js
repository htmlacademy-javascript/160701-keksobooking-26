const sliderElement = document.querySelector('.ad-form__slider');
const priceInput = document.querySelector('#price');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  priceInput.value = sliderElement.noUiSlider.get();
});
