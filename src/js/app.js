import '../scss/app.scss';

import { drag, drop, dragEnter, dragOver } from './drag-and-drop';
import { showCode } from './elements';
import { closeModal } from './modal';

const $content = document.querySelector('.content');
const $dropBlocks = document.querySelectorAll('.droparea__block');
const $modalClose = document.querySelector('.modal .btn-close');
const $modalExport = document.querySelector('#btn-export');

$dropBlocks.forEach((el) => {
  const cp = el.children[0];
  cp.draggable = true;
  cp.addEventListener('dragstart', drag);
});

$content.addEventListener('dragenter', dragEnter);
$content.addEventListener('dragover', dragOver);
$content.addEventListener('drop', drop);

$modalClose.addEventListener('click', closeModal);

$modalExport.addEventListener('click', showCode);
