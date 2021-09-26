/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/* Jawab 
- Type Error adalah error yang terjadi ketika sebuah operasi tidak dapat dilakukan, biasanya terjadi ketika type value yang diterima bukan type yang diharapkan 

type error dapat terjadi ketika :
1. sebuah typeof operan atau argument yang di passingkan ke fungsi tidak kompatibel dengan type yang seharusnya diterima oleh fungsi
2. ketika mencoba untuk mengubah value yang tidak boleh diubah
3. ketika mencoba untuk menggunakan sebuah nilai dengan cara yang tidak appropriate

contoh dari type error:
ketika kita 
  let number = 12 ; 
  number.toUpperCase() ;
  console.log(number.toUpperCase()) ; // Tidak dapat mengkonversi number menjadi upperca characters
mencoba untuk mengkonversi number menjadi uppercase character dengan fungsi toUpperCase(). Hal ini akan menampilkan pesan error karena toUpperCase() hanya menerima argumen dengan string type


- Reference Error
Refference error terjadi jika menggunakan referensi variabel yang belum dideklrasikan 
contoh :
let x;
x = y + 1; // tidak dapat mereferensikan variabel y karena variabel y belum dideklarasikan sebelumnya


-Range error
RangeError adalah error yang mengindikasikan ketika mencoba mengakses nilai diluar rentang yang legal

- Syntax error
Syntax error terjadik ketika mencoba menjalankan code yang yang invalid
*/


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;



/** 
- Terjadi error
- Kategori errornya : reference error
Cannot access 'salaryWithConst' before initialization
- Hal ini terjadi karena variabel salaryWithConst yang mana pada kode program diatas dideklarasikan dengan key const dipanggil dahulu sebelum diinisialisasikan. Hal ini menyebabkan kita mencoa untuk mereferensikan variabel yang belum dideklarasikan/diinisilisasikan. Eror ini masuk kedalam kategori referenceError

*! kenapa hasil ini undefined ? (bukannya var dikenai hosting)
console.log(salaryWithVar)
var salaryWithVar = 15000000;
**/
