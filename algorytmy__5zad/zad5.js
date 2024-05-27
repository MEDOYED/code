function bubleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let k = 0; k < arr.length - i - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        const one = arr[k]
        arr[k] = arr[k + 1];
        arr[k + 1] = one;
      }
    }
  }
  console.log(arr);
}

const numbers = [15, 2, 8, 1, 17, 6, 3, 9, 0, 4];
bubleSort(numbers);
