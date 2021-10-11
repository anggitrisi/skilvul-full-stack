const arr = [
  [10],
  [9, 7, 1],
  [2, 8],
];

const searchInArray = (arr, num ) => {
  const oneDArray = arr.reduce((acc,curr) => [...acc,...curr],[]);
  // const result = oneDArray.indexOf(num)
  const result = oneDArray.findIndex(x => x==num )

  return result < 0 ? null : result
 }

console.log("=====searchInArray(arr)======");
console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
