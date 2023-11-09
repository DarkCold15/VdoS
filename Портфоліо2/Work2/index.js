// Отримати число від користувача
const number = parseInt(prompt('Введіть число: '));

// Перевірка, чи є число кратним 2 і 3 одночасно
if (number % 2 === 0 && number % 3 === 0) {
  document.writeln(number + ' є кратним 2 і 3 одночасно.');
} else {
  document.writeln(number + ' не є кратним 2 і 3 одночасно.');
}