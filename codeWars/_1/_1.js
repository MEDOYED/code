// function crap(x, bags, cap) {
// const countCrap = x.flat().filter(z => z == '@').length;
// const maxCrap = bags * cap;
// if (x.flat().filter(c => c == 'D').length > 0) {
//   // console.log('Dog!!');
//   return 'Dog!!';
// } else if (countCrap <= maxCrap) {
//   // console.log('Clean');
//   return 'Clean';
// } else {
//   // console.log('Cr@p');
//   return 'Cr@p';
// }
// console.log(
//   x.flat().filter(c => c == 'D').length > 0
//     ? 'Dog!!'
//     : x.flat().filter(c => c == '@').length <= bags * cap
//     ? 'Clean'
//     : 'Cr@p',
// );

//   return x.flat().filter(c => c == 'D').length > 0
//     ? 'Dog!!'
//     : x.flat().filter(c => c == '@').length <= bags * cap
//     ? 'Clean'
//     : 'Cr@p';
// }

crap = (a, b, c) => {
  console.log((a + '').split('@'));
  console.log(
    (a + '').includes('D')
      ? 'Dog!!'
      : (a + '').split('@').length - 1 <= b * c
      ? 'Clean'
      : 'Cr@p',
  );
};

console.log(
  crap(
    [
      ['@', '@', '@', '@'],
      ['@', '_', '_', '_'],
      ['_', '_', '_', '_'],
    ],
    2,
    2,
  ),
);
