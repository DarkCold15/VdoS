var number1 = parseFloat(prompt("Введіть перше число:"));
var number2 = parseFloat(prompt("Введіть друге число:"));
var number3 = parseFloat(prompt("Введіть третє число:"));

// Перевірити, чи введені значення є числами
if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
  // Знайти найбільше число
  var maxNumber = Math.max(number1, number2, number3);

  // Вивести результат
  document.writeln("Найбільше число: " + maxNumber);
} else {
  console.log("Будь ласка, введіть коректні числа.");
}