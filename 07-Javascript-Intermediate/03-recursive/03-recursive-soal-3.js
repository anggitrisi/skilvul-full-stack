const arr = [1, 2, 3, 4, 5];
function searchInArray( arr, num ) {
  if ( arr.length === 0) {
    return "angka tidak ditemukan"
  }
  if ( arr[arr.length-1] === num){
    return "angka ditemukan pada index ke-" + (arr.length-1)
  }
  return searchInArray(arr.slice(0,-1), num)
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1)
);
console.log(searchInArray(arr, 8));
