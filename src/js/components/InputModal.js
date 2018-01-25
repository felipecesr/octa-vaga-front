/* Helpers */
import { closeModal } from '../modal';

class InputModal {
  constructor(modal) {
    this.modal = modal;

    this.template = `
      <p>Add placeholder:</p>
      <input id="ipt-placeholder" type="text" class="form-control">
      <button id="ipt-submit" type="submit" class="btn btn--success">Adicionar</button>
    `;
  }

  mount(el) {
    this.modal.innerHTML = this.template;

    const submit = document.querySelector('#ipt-submit');

    submit.addEventListener('click', () => {
      el.placeholder = document.querySelector('#ipt-placeholder').value;

      closeModal();
    });
  }
}

export default InputModal;
