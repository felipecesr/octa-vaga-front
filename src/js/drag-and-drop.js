import { buildElement } from './elements';

export function drag(e) {
  e.dataTransfer.setData('text', e.target.id);
}

export function drop(e) {
  e.preventDefault();

  const data = e.dataTransfer.getData('text');
  const copy = buildElement(data);

  copy.querySelector('.btn-close').addEventListener('click', (ev) => {
    this.removeChild(ev.target.parentNode);
  });

  const content = document.querySelector('.content');

  content.appendChild(copy);
  content.classList.remove('over');
}

export function dragEnter() {
  this.classList.add('over');
}

export function dragOver(e) {
  e.preventDefault();
}
