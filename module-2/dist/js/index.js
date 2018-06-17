/*jshint esversion: 6 */
function startScript() {

  const numbers = [];
  let total = 0;
  let userInput;
  const fail = 'Было введено не число, попробуйте еще раз';
  const success = 'Общая сумма чисел равна ';

  do {
    userInput = prompt('Введите число:');
    if (userInput === null) {
      for (let item of numbers) {
        total += item;
      }
      alert(`${success}${total}`);
      break;
    }

    !isNaN(parseInt(userInput)) && isFinite(userInput) ?
      numbers.push(parseInt(userInput))
      : alert(fail);
  } while (true)
}
