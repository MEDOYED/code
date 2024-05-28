const people = [
  { name: 'Alex', firstname: 'Alekhverdow', height: 174, nationality: 'uzbekistan' },
  { name: 'Maksym', firstname: 'Mokriakov', height: 193, nationality: 'ukrainian' },
  { name: 'Stas', firstname: 'Kakiehoches', height: 203, nationality: 'uzbekistan' },
  { name: 'Jaroslav', firstname: 'Zub', height: 165, nationality: 'ukrainian' },
  { name: 'Bob', firstname: 'Mercuri', height: 178, nationality: 'turk' },
  { name: 'Oxana', firstname: 'Lolachka', height: 174, nationality: 'uzbekistan' },
  { name: 'Yulia', firstname: 'Isakova', height: 188, nationality: 'ukrainian' },
  { name: 'Ogorek', firstname: 'Pipa', height: 183, nationality: 'uzbekistan' },
  { name: 'DanQA', firstname: 'Babachenko', height: 176, nationality: 'ukrainian' },
  { name: 'Hovil', firstname: 'Kotik', height: 190, nationality: 'uzbekistan' },
];

// Selection sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for(let k = i + 1; k < arr.length; k++) {
      if (arr[k].height < arr[min].height) {
        min = k;
      }
    }

    if (min !== i) {
      let pop = arr[i];
      arr[i] = arr[min];
      arr[min] = pop;
    }
  }
  return arr;
}

function findPersonByName(arr, name) {
  return arr.find(person => person.name === name);
}

const personName = 'Maksym';

console.log(findPersonByName(people, personName));
console.log('==================================');
console.log(selectionSort(people));