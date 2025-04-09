// Функція методу січних (Regula Falsi)
function regulaFalsi(f, a, b, maxIterations = 100, tolerance = 1e-7) {
  // Перевіряємо, чи справді f(a) і f(b) мають протилежні знаки
  if (f(a) * f(b) >= 0) {
    console.error(
      'f(a) і f(b) мають однаковий знак. Метод може не знайти корінь в цьому відрізку.',
    );
  }

  let x;
  for (let i = 0; i < maxIterations; i++) {
    // Формула Regula Falsi
    x = b - (f(b) * (b - a)) / (f(b) - f(a));

    // Перевірка виходу за умови досягнення заданої точності
    if (Math.abs(f(x)) < tolerance) {
      return x;
    }

    // Звужуємо інтервал: вибір [a, x] або [x, b]
    if (f(a) * f(x) < 0) {
      b = x;
    } else {
      a = x;
    }
  }

  // Якщо вийшли з циклу — повертаємо останній x (наближення)
  console.warn('Досягнуто ліміт ітерацій без потрібної точності.');
  return x;
}

// Приклад функції: f(x) = x^2 - 2
function f(x) {
  return x * x - 2;
}

// Задаємо початкові точки інтервалу [a, b]
// Тут корінь лежить між 0 та 2 (f(0) = -2, f(2) = 2)
const a = 0;
const b = 2;

// Викликаємо метод січних
const root = regulaFalsi(f, a, b);

// Виводимо результат
console.log('Знайдений корінь (Metoda Siecznych):', root);
