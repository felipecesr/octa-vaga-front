/* Helpers */
import { closeModal } from '../modal';

class CheckModal {
  constructor(modal) {
    this.modal = modal;

    this.template = `
      <p>Add options:</p>
      <div id="options-block">
        <input type="text" class="form-control text-option">
      </div>
      <button id="check-option" class="btn">+ Opção</button>
      <button id="check-submit" type="submit" class="btn btn--success">Adicionar</button>
    `;
  }

  mount(el) {
    this.modal.innerHTML = this.template;

    const btn = document.querySelector('#check-option');
    const block = document.querySelector('#options-block');
    const option = document.querySelector('#options-block .text-option');
    const submit = document.querySelector('#check-submit');

    btn.addEventListener('click', () => {
      const newOption = option.cloneNode(true);
      newOption.value = '';
      block.appendChild(newOption);
    });

    submit.addEventListener('click', () => {
      const optionsNodes = document.querySelectorAll('#options-block .text-option');

      const html = [].map.call(optionsNodes, opt => `
        <label class="check"><input type="checkbox" name="checkblock">${opt.value}</label>
      `).join('');

      el.innerHTML = html;

      closeModal();
    });
  }
}

export default CheckModal;
