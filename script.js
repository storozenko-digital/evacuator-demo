const form = document.querySelector('#demo-form');
const status = document.querySelector('#form-status');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Демо-форма работает. Перед запуском подключим телефон или мессенджер владельца.';
});
