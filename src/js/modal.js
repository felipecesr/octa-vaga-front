export function openModal() {
  document.documentElement.classList.add('modal--active');
}

export function closeModal() {
  document.documentElement.classList.remove('modal--active');
}
