class FormState {
  constructor(formElement) {
    this.form = formElement;
    this.disabledClassName = `${this.form.classList[0]}--disabled`;
    this.formElements = Array.from(this.form.elements);
    this.sliderElement = this.form.querySelector('.ad-form__slider');
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
}

export default FormState;
