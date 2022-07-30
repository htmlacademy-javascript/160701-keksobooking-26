const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const avatarFileChooser = document.querySelector(
  '.ad-form__field input[type=file]',
);
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const houseImageFileChooser = document.querySelector(
  '.ad-form__upload input[type=file]',
);
const houseImagePreview = document.querySelector('.ad-form__photo');

const getImgUrl = (input) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    return URL.createObjectURL(file);
  }

  return '';
};
const inputHouseImageFileHandler = ({ target }) => {
  const imgSrc = getImgUrl(target);

  if (imgSrc) {
    houseImagePreview.style.backgroundImage = `url(${imgSrc})`;
  }
};
const inputAvatarFileHandler = ({ target }) => {
  const imgSrc = getImgUrl(target);

  if (imgSrc) {
    avatarPreview.src = imgSrc;
  }
};
avatarFileChooser.addEventListener('change', inputAvatarFileHandler);
houseImageFileChooser.addEventListener('change', inputHouseImageFileHandler);
