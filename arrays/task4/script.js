const cats = [
  { catWeight: 3, foodWeight: 20, owners: ['Наташа'] },
  { catWeight: 6, foodWeight: 90, owners: ['Марина', 'Алиса'] },
  { catWeight: 4, foodWeight: 45, owners: ['Алекс', 'Ирина'] },
  { catWeight: 7, foodWeight: 80, owners: ['Борис'] },
];
// 1. Переберите элементы массива cats, которые являются объектами, и для каждой кошки вычислите рекомендуемую порцию еды и добавьте ее к объекту, как новое свойство. Не создавайте новый массив, просто переберите массив!
// Формула вычисления рекомендуемой порции:
// рекомендуемая порция = вес кошки * 0.75 * 12 (результат в граммах, а вес кошки в килограммах).


cats.forEach(cat => {
  cat.recomendedPortion = cat.catWeight * 0.75 * 12; // Добавляем порцию напрямую
});




console.log(cats);

// 2. Найдите кошку, имя хозяина которой Алекс и выведите в консоль, ест ли эта кошка слишком много или слишком мало. Подсказка: у некоторых кошек есть несколько владельцев, поэтому вам сначала нужно найти Алекса в массиве владельцев.

const alexCat = cats.find(cat => cat.owners.includes('Алекс'));

if (alexCat.foodWeight < alexCat.recomendedPortion * 0.9) {
  console.log('Кошка Алекса ест слишком мало');
} else if (alexCat.foodWeight > alexCat.recomendedPortion * 1.1) {
  console.log('Кошка Алекса ест слишком много');
} else {
  console.log('Кошка Алекса ест нормально');
}

// 3. Создайте массив, содержащий всех владельцев кошек, которые слишком много едят (catsEatTooMuchOwners), и массив со всеми владельцами кошек, которые слишком мало едят (catsEatTooLittleOwners).

let catsEatTooMuchOwners = [];

let catsEatTooLittleOwners = [];

cats.forEach(cats => {
  if (cats.foodWeight < cats.recomendedPortion * 0.9) {
    catsEatTooLittleOwners.push(...cats.owners);
  } else if (cats.foodWeight > cats.recomendedPortion * 1.1) {
    catsEatTooMuchOwners.push(...cats.owners);
  }
});

console.log(catsEatTooMuchOwners);
console.log(catsEatTooLittleOwners);

// 4. Выведите в консоль строку для каждого из массивов, созданных в пункте 3:
// "Марина, Алиса, Борис - хозяева кошек, которые едят слишком много!" и "Наташа, Ирина, Алекс  - хозяева кошек, которые едят слишком мало!"

console.log(
  `${catsEatTooMuchOwners.join(
    ', ',
  )} - хозяева кошек, которые едят слишком много!`,
);
console.log(
  `${catsEatTooLittleOwners} - хозяева кошек, которые едят слишком мало!`,
);

// 5. Выведите в консоль, ест ли хоть одна кошка в точном соответствии с рекомендуемым количеством еды (просто true или false).

const clearCheck = cats.some(cat => {
  if (cat.foodWeight === cat.recomendedPortion) {
    return true;
  } else {
    return false;
  }
});

console.log(clearCheck);

// 6. Выведите в консоль, ест ли хоть одна кошка нормальное количество еды (просто true или false).

const checkingForANormalAmountOfFood = cats.some(cat => {
  if (
    cat.foodWeight < cat.recomendedPortion * 0.9 &&
    cat.foodWeight > cat.recomendedPortion * 1.1
  ) {
    return false;
  } else {
    return true;
  }
});

console.log(checkingForANormalAmountOfFood);

// 7. Создайте массив, содержащий кошек, которые едят нормальное количество еды (попробуйте повторно использовать условие, используемое в пункте 6).

let catsEatForANormalAmountOfFood = [];


cats.forEach(cat => {
  if (cat.foodWeight > cat.recomendedPortion * 0.9 && cat.foodWeight < cat.recomendedPortion * 1.1) {
    catsEatForANormalAmountOfFood.push(cat);
  }
});

console.log(catsEatForANormalAmountOfFood);

// 8. Создайте мелкую (shallow) копию массива cats и отсортируйте по свойству рекомендуемая порция еды по возрастанию (имейте в виду, что порции находятся внутри объектов массива).

const shallowCopyCats = [...cats];

shallowCopyCats.sort((a, b) => a.recomendedPortion - b.recomendedPortion);

console.log(shallowCopyCats);
console.log(cats);
