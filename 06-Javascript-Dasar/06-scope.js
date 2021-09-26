/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:

/// - ada berapa banyak jumlah variable scope pada Javascript?
/*
Scope variable dalam javascript dibagi menjadi dua, yaitu 
1. Global Scope
2. Local Scope, dimana local scope ini dibagi dua lagi pula yaitu block scope dan function scope
*/

/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/*
Global scope variabel adalah ketika sebuah variabel dideklarasikan diluar blocks atau curly braces {} sehingga variabel ini bisa diakses dari mana saja dari suatu file, baik didalam ataupun di luar suatu blok kode 

Local scope variabel adalah ketika sebuah variabel dideklarasikan didalam suatu blocks seperti function, conditional atau looping sehingga variabel tersebut hanya bisa diakses didalam blocks atau fungsi dimana ia dideklarasikan. Local scope ini dibagi menjadi dua yaitu, function scope jika variabel dideklarasikan dalam fungsi dan block, scope jika variable dideklarasikan dalam suatu block seperti conditional atau looping
*/

/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

// Implemetasi global scope variabel
const mataKuliah = "data science";

function namaDosen() {
  let dosen = "Erna";
  console.log(mataKuliah); // Output data science
  if (mataKuliah === "data science") {
    dosen = "Dani";
    let ruang = "A 105";
    console.log(mataKuliah + ' (' + ruang + ')'); // Ouput data science (A 105)
  }
  return dosen;
}
console.log(namaDosen()); // Output Dani
console.log(mataKuliah); // Output data science

/* Analisis implementasi global scope pada kode program diatas 
Pada kode program diatas variabel `mataKuliah` dapat diakses dalam fungsi `namaDosen` dan juga dalam blok `if` walaupun variabel `mataKuliah` tidak dideklarasikan dalam fungsi atau blok tersebut. Ini dikarenakan variabel mataKuliah dideklrasikan diluar blok atau fungsi sehingga memiliki scope global, jadi bisa diakses dari mana saja.
*/

//Implementasi local scope variabel
function namaDosen2() {
  const mataKuliah2 = "data science"; // function scope
  let dosen2 = "Erna"; // function scope
  console.log(mataKuliah2); 
  if (mataKuliah2 === "data science") {
    dosen2 = "Dani"  ;
    let ruang2 = "A 105" ;// blok scope
  }
  //console.log(ruang) // Output : Uncaught ReferenceError: ruang is not defined
  return dosen2;
}
console.log(namaDosen2()); // Output Dani
//console.log(mataKuliah2);  // Output : Uncaught ReferenceError: ruang is not defined

/* Analisis implementasi local scope pada kode program diatas
Pada kode program diatas variabel `ruang2` dideklarasikan didalam blok `if` sehingga jika diakses  diluar scope blok `if` akan mengembalikan nilai error. Sedangkan variabel `mataKuliah2` merupakan function scope variabel sehingga dapat diakses dalam fungsi tetapi tidak dapat diakses diluar fungsi*/


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini

/// - apa yang akan tampil didalam console.log ?
/*
Yang akan ditampilkan dalam console.log adalah nama pertama dari kata pertama dari argumen "Mariah Carey" yaitu Mariah
*/


/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
/*
Alasannya adalah karena pada fungsi printFirstName(name), name disini bukan merujuk atau bukan akan diisi dengan nilai dari variable name. Melainkan name disini adalah sebuah parameter dan sast fungsi printFirstName(name) dipanggil dengan kode :

console.log(printFirstName("Mariah Carey"));

dilakukan pengiriman argumen "Mariah Carey" ke parameter fungsi sehingga yang dimanipulasi dengan syntax name.spilt(" ")[0] adalah "Mariah Carey" 

dimana string "Mariah Carey" dengan fungsi split (" ") akan dibagi menjadi array, yaitu ['Mariah', 'Carey'] dan hasil dari name.spilt(" ")[0] akan mengembalikan indeks-ke 0 dari array, yaitu Mariah
*/

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
