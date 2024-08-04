const label = document.querySelector('.label');
const textarea = document.getElementById('text');
const btnConvert = document.querySelector('.btn-convert');
const form = document.querySelector('.form');

// створив і додав в DOM список в який потім будуть записуватись відформатовані імена
const inputList = document.createElement('div');
inputList.classList.add('input-list');
form.append(inputList);

// // створення функціоналі при кліканні на кнопці
// btnConvert.addEventListener('click', function (e) {
//   // відмінив стандартну дію відправки форми.
//   e.preventDefault();

//   let textareaValue = textarea.value.trim().replace('_', ' ');
//   let textareaValueArray = textareaValue.split(' ');
//   let textareaValueSecondWord =
//     textareaValueArray[1].slice(0, 1).toUpperCase() +
//     textareaValueArray[1].slice(1);
//   let convertedName = textareaValueArray[0] + textareaValueSecondWord;

//   // створення інпута
//   const input = document.createElement('input');
//   input.classList.add('input');
//   inputList.append(input);
//   input.value = convertedName;

//   // очистака текстареа від тексту після натискання на кнопну
//   textarea.value = '';
// });


const formatName = function(name) {
  let formattedName = name.trim().replace('_', ' ');

  let nameArray = formattedName.split(' ');

  if (nameArray.length > 1) {
    let secondWord = nameArray[1];
    nameArray[1] = secondWord[0].toUpperCase() + secondWord.slice(1);
  }

  return nameArray.join('');
}

const addInputToList = function(value) {
  const input = document.createElement('input');
  input.classList.add('input');
  input.value = value;
  inputList.appendChild(input);
}

// Обработчик события при клике на кнопке
btnConvert.addEventListener('click', (e) => {
  e.preventDefault();
  const formattedName = formatName(textarea.value);
  addInputToList(formattedName);
  textarea.value = ''; 
});