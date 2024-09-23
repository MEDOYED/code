function solution(number) {
  let onThree = [];
  let onFive = [];

  if (number < 0) {
    console.log(0);
    // return 0;
  } else {
    for (let i = 1; i < number; i++) {
      if (Number.isInteger(i / 3)) {
        onThree.push(i);
      } else if (Number.isInteger(i / 5)) {
        onFive.push(i);
      }
    }

    const sumAllNum = onThree.concat(onFive).reduce((acc, i) => acc + i);
    console.log(sumAllNum);
    // return sumAllNum;
  }
}

solution(4);
