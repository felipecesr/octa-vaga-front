/* Helpers */
import { closeModal } from '../modal';

class ButtonModal {
  constructor(modal) {
    this.modal = modal;

    this.template = `
      <p>Select your favorite color:</p>
      <input id="btn-value" type="text" class="form-control" value="ok">
      <input id="btn-color" type="color" value="#5cb85c">
      <button id="btn-submit" type="submit" class="btn btn--success">Adicionar</button>
    `;
  }

  mount(el) {
    this.modal.innerHTML = this.template;

    const submit = document.querySelector('#btn-submit');

    submit.addEventListener('click', () => {
      el.textContent = document.querySelector('#btn-value').value;
      el.style.backgroundColor = document.querySelector('#btn-color').value;

      closeModal();
    });
  }
}

export default ButtonModal;
