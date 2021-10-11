// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
/*
Yang akan terjadi adalah  :
fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }        
fun2 {}

- obj.fun1() akan menampikan isi atribbute obj
- sedangkan obj.fun2() tidak menampilkan isi attribute obj
*/

// 2. Apakah hasil dari fun1 dan fun2 itu sama?
/*
Hasilnya berbeda
*/

// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
/*
Pada fun1 yaitu anonymous function dengan function keyword memiliki akses terhadap this. Pada function ini this akan merefer ke scope obj sedangkan pada fun 2 yaitu anonymous function dengan arrow function tidak punya pengaksesan terhadapa this (this disini merefer ke global) oleh karena itu saat fun2 dipanggil hasil console.log nya adalah objek kosong karena fun 2 tidak memiliki akses ke obj.
*/
const obj = {
  fun1: function() {
    console.log("fun1", this);
  },
  fun2: () => {
    console.log("fun2", this);
  }
};

obj.fun1();
obj.fun2(); 
