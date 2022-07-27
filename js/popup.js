const removePopup = (type) => {
  const popup = document.querySelector(`.${type}`);

  if (popup) {
    popup.remove();
  }
};
const closeHandler = (evt) => {
  if (evt.key === 'Escape') {
    removePopup('success');
    removePopup('error');
    document.removeEventListener('keydown', closeHandler);
  }
};

const clickHandler = () => {
  removePopup('success');
  removePopup('error');
  document.removeEventListener('click', clickHandler);
};
const showPopup = (type) => {
  const templateElement = document
    .querySelector(`#${type}`)
    .content.cloneNode(true);

  document.body.appendChild(templateElement);
  document.addEventListener('click', clickHandler);
  document.addEventListener('keydown', closeHandler);
};

export { showPopup, removePopup };
