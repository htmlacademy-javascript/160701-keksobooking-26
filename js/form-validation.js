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
  1: [{ name: 'для 1 гостя', value: 1 }],
  2: [
    { name: 'для 2 гостей', value: 2 },
    { name: 'для 1 гостя', value: 1 },
  ],
  3: [
    { name: 'для 3 гостей', value: 3 },
    { name: 'для 2 гостей', value: 2 },
    { name: 'для 1 гостя', value: 1 },
  ],
  100: [{ name: 'не для гостей', value: 0 }],
};
const validateCapacity = () => {
  const capacitySelectValue = Number(capacitySelect.value);
  const isIncludes = roomOption[roomSelect.value]
    .map((el) => el.value)
    .includes(capacitySelectValue);

  return isIncludes;
};
const capacityErrorMessageMap = {
  1: 'Подходит только для 1 гостя',
  2: 'Подходит только для 1 или 2 гостей',
  3: 'Подходит только для 1,2 или 3 гостей',
  100: 'Не подходит для гостей',
};
const getCapacityErrorMessage = () => capacityErrorMessageMap[roomSelect.value];
pristine.addValidator(roomSelect, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(capacitySelect, validateCapacity, getCapacityErrorMessage);
adForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
