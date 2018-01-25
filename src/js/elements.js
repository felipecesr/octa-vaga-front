/* Libraries */
import FileSaver from 'file-saver';

/* Components */
import ButtonModal from './components/ButtonModal';
import CheckModal from './components/CheckModal';
import InputModal from './components/InputModal';

/* Helpers */
import { openModal } from './modal';

/* Elements */
const $content = document.querySelector('.content');
const $modal = document.querySelector('.modal .modal__content');

/* Instances */
const buttonModal = new ButtonModal($modal);
const checkModal = new CheckModal($modal);
const inputModal = new InputModal($modal);

export function modalEditor(el) {
  document.documentElement.classList.add('modal--active');

  if (el.nodeName === 'BUTTON') {
    buttonModal.mount(el);
  }

  if (el.nodeName === 'FORM') {
    checkModal.mount(el);
  }

  if (el.nodeName === 'INPUT') {
    inputModal.mount(el);
  }
}

export function buildElement(data) {
  const $wrapper = document.createElement('div');
  const $btn = document.createElement('button');
  const $copy = document.getElementById(data).cloneNode(true);

  $wrapper.className = 'wrapper';

  $btn.className = 'btn-close';
  $btn.textContent = '✖';

  $copy.removeAttribute('id');
  $copy.removeAttribute('draggable');

  $wrapper.appendChild($btn);
  $wrapper.appendChild($copy);

  modalEditor($copy);

  return $wrapper;
}

function exportFile() {
  const file = new File([document.querySelector('pre').textContent], 'index.html', { type: 'text/plain;charset=utf-8' });
  FileSaver.saveAs(file);
}

export function showCode() {
  const $pre = document.createElement('pre');
  const $btn = document.createElement('button');

  $btn.className = 'btn btn--success';
  $btn.textContent = 'Exportar';
  $pre.className = 'code-box';
  $pre.textContent = $content.outerHTML;
  $modal.innerHTML = '<p>Source Code:</p>';

  $modal.appendChild($pre);
  $modal.appendChild($btn);

  $btn.addEventListener('click', exportFile);

  openModal();
}
