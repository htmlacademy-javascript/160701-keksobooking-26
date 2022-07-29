import { sendForm } from './backend.js';
import { OfferTypePrices, Validation } from './data.js';
import FormState from './form.js';

const adForm = document.querySelector('.ad-form');
const adFormResetBtn = adForm.querySelector('.ad-form__reset');

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
const PristineParams = {
  PRIORITY: 2,
  HALT: true,
};
const validatorParams = [
  PristineParams.PRIORITY_FUNCTION_VALUE,
  PristineParams.HALT,
];
const validateTitle = (value) =>
  value.length >= Validation.TITLE.MIN_TITLE_LENGTH &&
  value.length <= Validation.TITLE.MAX_TITLE_LENGTH;
pristine.addValidator(
  adForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов',
  ...validatorParams,
);
const priceInput = document.querySelector('#price');
const validatePriceMax = (value) => Number(value) <= Validation.PRICE.MAX_PRICE;
const validatePriceMin = (value) => Number(value) >= Number(priceInput.min);
const getMinPriceErrorMessage = () =>
  `Минимальное значение — ${priceInput.min}`;
pristine.addValidator(
  priceInput,
  validatePriceMax,
  'Максимальное значение — 100 000',
  ...validatorParams,
);
pristine.addValidator(
  priceInput,
  validatePriceMin,
  getMinPriceErrorMessage,
  ...validatorParams,
);

const roomSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const RoomOptions = {
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
  const isIncludes = RoomOptions[roomSelect.value]
    .map((el) => el.value)
    .includes(capacitySelectValue);

  return isIncludes;
};
const CapacityErrorMessageMap = {
  1: 'Подходит только для 1 гостя',
  2: 'Подходит только для 1 или 2 гостей',
  3: 'Подходит только для 1,2 или 3 гостей',
  100: 'Не подходит для гостей',
};
const getCapacityErrorMessage = () => CapacityErrorMessageMap[roomSelect.value];
pristine.addValidator(
  roomSelect,
  validateCapacity,
  getCapacityErrorMessage,
  ...validatorParams,
);
pristine.addValidator(
  capacitySelect,
  validateCapacity,
  getCapacityErrorMessage,
  ...validatorParams,
);
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!pristine.validate()) {
    return;
  }
  sendForm(adForm);
});
const timeinSelect = document.querySelector('#timein');
const timeoutSelect = document.querySelector('#timeout');
const syncTimeHandler = ({ target }) => {
  const targetId = target.id;
  const selectTarget = targetId === 'timein' ? timeinSelect : timeoutSelect;
  const selectCompare = targetId === 'timein' ? timeoutSelect : timeinSelect;
  selectCompare.value = selectTarget.value;
};
timeinSelect.addEventListener('change', syncTimeHandler);
timeoutSelect.addEventListener('change', syncTimeHandler);

const formTypeSelect = document.querySelector('#type');
const formTypeHandler = ({ target }) => {
  const findedOfferType = OfferTypePrices[target.value];

  if (findedOfferType) {
    const { price } = findedOfferType;

    priceInput.min = price;
    priceInput.placeholder = price;
  } else {
    priceInput.min = '0';
    priceInput.placeholder = '0';
  }
};
formTypeSelect.addEventListener('change', formTypeHandler);
formTypeSelect.dispatchEvent(new Event('change'));

adFormResetBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  new FormState(adForm).reset();
});
