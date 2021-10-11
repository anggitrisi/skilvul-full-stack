const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];


 const getAverage = (arr) => {
   const avg = arr.reduce((acc,curr) => acc + curr,0)/arr.length;
   const result = arr.reduce((acc,curr) => (curr > avg) ? acc + 1 : acc,0)
   return result
  }

console.log("=====getAverage(arr)======");
console.log(getAverage(arr1))
console.log(getAverage(arr2))
