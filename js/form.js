class FormState {
  constructor(formElement) {
    this.form = formElement;
    this.disabledClassName = `${this.form.classList[0]}--disabled`;
    this.formElements = Array.from(this.form.elements);
  }

  disabled() {
    this.form.classList.add(this.disabledClassName);
    this.formElements.forEach((elem) => {
      elem.setAttribute('disabled', 'disabled');
    });
  }

  active() {
    this.form.classList.remove(this.disabledClassName);
    this.formElements.forEach((elem) => {
      elem.removeAttribute('disabled');
    });
  }
}

const formElements = document.querySelectorAll('.ad-form, .map__filters');
formElements.forEach((form) => new FormState(form).disabled());
