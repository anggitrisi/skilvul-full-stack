/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

let primeArr = []
for (let i=1; i<=100; i++) { 
  let isPrima = true;
    for(let j=2; j<i; j++){
      
      if(i%j==0){
        isPrima = false;
        break;
      }
  }
  if (i > 1 && isPrima == true) {
    primeArr.push(i);
  }
}
console.log(primeArr.toString())


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;
let indexToSearch = 50;
let iteration= 2;
/// EDIT HERE
while (primeCounter < indexToSearch) {
  let isPrime = true;
  if(iteration!==2 && iteration%2 ===0){
    isPrime = false;
    iteration++
    continue;
  }

  for(let j = 2; j < iteration; j++){
    if(iteration% j === 0) {
      isPrime = false;
      break;
    }
  }

  if(isPrime){
    primeCounter++
    result = iteration;
  }
  iteration++;
}
console.log(result);

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd=0;
let iteration2 = 1;
/// EDIT HERE
do {
  const isOdd = iteration2 % 2
  if(isOdd){
    oddCounter++
    fiftiethOdd = iteration2
  }
  iteration2++
} while (oddCounter < 50)

console.log(fiftiethOdd)

