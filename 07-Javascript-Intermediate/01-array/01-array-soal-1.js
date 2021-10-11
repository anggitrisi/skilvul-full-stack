// SOAL - 01
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse( arr ) { 
  // slice() to make a copy so we can reverese without mutation
  return arr.slice().reverse()
 }

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log("=====reverse(arr)======");
console.log(arr, newArr);
console.log(arr2, newArr2);

