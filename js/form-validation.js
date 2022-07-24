const adForm = document.querySelector('.ad-form');
const pristine = new Pristine(
  adForm,
  {
    classTo: 'ad-form__element',
    errorClass: 'ad-form__element--invalid',
    successClass: 'ad-form__element--valid',
    errorTextParent: 'ad-form__element',
    errorTextTag: 'span',
    errorTextClass: 'ad-form__error',
  },
  false,
);

const validateTitle = (value) => value.length >= 30 && value.length <= 100;
pristine.addValidator(
  adForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов',
);

const validatePrice = (value) => value <= 100000;
pristine.addValidator(
  adForm.querySelector('#price'),
  validatePrice,
  'Максимальное значение — 100 000',
);

const roomSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const roomOption = {
  1: ['для 1 гостя'],
  2: ['для 2 гостей', 'для 1 гостя'],
  3: ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  100: ['не для гостей'],
};
const validateCapacity = (value) => {};
const getCapacityErrorMessage = () => `${roomSelect.value}`;
pristine.addValidator(roomSelect, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(capacitySelect, validateCapacity, getCapacityErrorMessage);
adForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
