// Функція методу Ньютона
function newtonMethod(
  f,
  fPrime,
  initialGuess,
  maxIterations = 100,
  tolerance = 1e-7,
) {
  let x = initialGuess;
  for (let i = 0; i < maxIterations; i++) {
    const y = f(x);
    const yPrime = fPrime(x);

    // Перевірка, щоб не ділити на нуль
    if (Math.abs(yPrime) < Number.EPSILON) {
      console.error(
        'Похідна наблизилася до 0. Метод Ньютона не може продовжуватися.',
      );
      return null;
    }

    const xNext = x - y / yPrime;

    // Перевірка, чи вже достатньо близько
    if (Math.abs(xNext - x) < tolerance) {
      return xNext;
    }

    x = xNext;
  }

  // Якщо досягли максимальної кількості ітерацій без досягнення tolerance
  console.warn('Досягнено ліміт ітерацій без потрібної точності.');
  return x;
}

// Приклад: f(x) = x^2 - 2
function f(x) {
  return x * x - 2;
}

// Похідна: f'(x) = 2x
function fPrime(x) {
  return 2 * x;
}

// Використовуємо метод Ньютона з початковим наближенням 1
const initialGuess = 1;
const root = newtonMethod(f, fPrime, initialGuess);

console.log('Знайдений корінь:', root);
