const removePopup = (type) => {
  const popup = document.querySelector(`.${type}`);

  if (popup) {
    popup.remove();
  }
};

const showPopup = (type) => {
  const templateElement = document
    .querySelector(`#${type}`)
    .content.cloneNode(true);

  const closeHandler = (evt) => {
    if (evt.key === 'Escape') {
      removePopup(type);
      document.removeEventListener('keydown', closeHandler);
    }
  };

  const clickHandler = () => {
    removePopup(type);
    document.removeEventListener('click', clickHandler);
  };
  document.body.appendChild(templateElement);
  document.addEventListener('click', clickHandler);
  document.addEventListener('keydown', closeHandler);
};

export { showPopup, removePopup };
