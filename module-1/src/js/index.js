/*jshint esversion: 6 */
function authentication() {
  const ADMIN_LOGIN = 'admin';
  const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
  const cancel = 'Отменено пользователем!';
  const accessDenied = 'Доступ запрещен!';
  const success = 'Добро пожаловать!';

  const initialMessage = prompt('Введите логин:');

  if (initialMessage === null) {
    alert(cancel);
  } else if (initialMessage === ADMIN_LOGIN) {
    const inputPassword = prompt('Введите пароль:');
    if (inputPassword === null) {
      alert(cancel);
    } else if (inputPassword === ADMIN_PASSWORD) {
      alert(success);
    } else alert(accessDenied);
  } else alert(accessDenied);
}