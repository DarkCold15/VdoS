function generateFibonacciNumbers(n) {
    const fibonacciNumbers = [0, 1]; // Перші два числа Фібоначчі
    let currentFibonacci = 1;
  
    while (currentFibonacci <= n) {
      currentFibonacci = fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2];
      if (currentFibonacci <= n) {
        fibonacciNumbers.push(currentFibonacci);
      }
    }
  
    return fibonacciNumbers;
  }
  
  const n = parseInt(prompt('Введіть максимальне число для генерації чисел Фібоначчі: '));
  const fibonacciNumbers = generateFibonacciNumbers(n);
  
    document.writeln('Числа Фібоначчі менше або рівні ' + n + ':');
    document.writeln(fibonacciNumbers);