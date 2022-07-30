class FormState {
  constructor(formElement) {
    this.form = formElement;
    this.disabledClassName = `${this.form.classList[0]}--disabled`;
    this.formElements = Array.from(this.form.elements);
    this.sliderElement = this.form.querySelector('.ad-form__slider');
    this.defaultAvatar = document.querySelector('.ad-form-header__preview img');
    this.houseImagePhoto = document.querySelector('.ad-form__photo');
    this.defaultAvatarSrc = this.defaultAvatar.getAttribute('src');
  }

  disabled() {
    this.form.classList.add(this.disabledClassName);
    this.formElements.forEach((elem) => {
      elem.setAttribute('disabled', 'disabled');
    });
    if (this.sliderElement) {
      this.sliderElement.setAttribute('disabled', true);
    }
  }

  active() {
    this.form.classList.remove(this.disabledClassName);
    this.formElements.forEach((elem) => {
      elem.removeAttribute('disabled');
    });
    if (this.sliderElement) {
      this.sliderElement.removeAttribute('disabled');
    }
  }

  reset() {
    this.form.reset();
    this.defaultAvatar.setAttribute('src', this.defaultAvatarSrc);
    this.houseImagePhoto.style.backgroundImage = '';
  }
}

export default FormState;
