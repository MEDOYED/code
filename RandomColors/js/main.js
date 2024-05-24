const block = document.querySelector('.block');
const color = document.querySelector('.color');
const btn = document.querySelector('.btn');
// const hex = '0123456789ABCDEF';
const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let hexCode1, hexCode2, hexCode3, hexCode4, hexCode5, hexCode6;
let hexCode;

btn.addEventListener('click', function() {
  hexCode1 = hexArray[Math.floor(Math.random()*hexArray.length)];
  hexCode2 = hexArray[Math.floor(Math.random()*hexArray.length)];
  hexCode3 = hexArray[Math.floor(Math.random()*hexArray.length)];
  hexCode4 = hexArray[Math.floor(Math.random()*hexArray.length)];
  hexCode5 = hexArray[Math.floor(Math.random()*hexArray.length)];
  hexCode6 = hexArray[Math.floor(Math.random()*hexArray.length)];
  hexCode = '#' + hexCode1 + hexCode2 + hexCode3 + hexCode4 + hexCode5 + hexCode6;

  console.log(hexCode);
  color.textContent = hexCode;
  block.style.backgroundColor = hexCode;
})