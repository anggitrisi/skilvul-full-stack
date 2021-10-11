function trianglePattern(x,y) { 
  let space = ""
  for(let i = 0; i < y; i++){
    if (x === 0){
      return;
    }
    if(i < x - 1){
      space += " "
    } else {
      space += String.fromCharCode(64 + (y - x +  (i - x) + 2));
      // 1 => 5 - 5 + (4 - 5) + 2
      // 2 => y - 4 + (3 - 4) + 2
    }
  }
  console.log(space);
  trianglePattern(x-1, y)
 }

trianglePattern(5, 5);
