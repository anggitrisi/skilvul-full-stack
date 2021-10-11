// 1. Apa itu synchronous?
/*
Asynchronous adalah sebuah sebuah konsep dalam pemrograman dimana perintah dieksekusi satu per satu secara berurutan. Agar perintah kedua dapat dijalankan harus menunggu perintah kesatu selesai dijalankan. Proses ini disebut blocking dan membutuhkan waktu yang lama untuk mengeksekusi perintah. 
*/

// 2. Apa itu asynchronous?
/*
Asynchronous adalah sebuah konsep dalam pemrograman yang mengizinkan komputer untuk dapat mengeksekusi lebih dari 1 proses (multi-thread) sekaligus. Suatu perintah dapat dieksekusi selagi menunggu perintah lain berlangsung. Proses ini dikenal sebagai non-blocking
*/

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
/*
Kita dapat menerapkan konsep asynchronous pada browser seperti untuk mengelola komunikasi ke server, misal proses request API (mengambil data dari server), operasi file, koneksi ke database, dan sebagainya
*/

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
/*
first log:  1
first log:  2
first log:  3
first log:  4
first log:  5
second log:  6
second log:  6
second log:  6
second log:  6
second log:  6
*/
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
/*
Saat proses asynchronous(dalam hal ini fungsi setTimeOut()) mulai berjalan, proses for loop akan segera berjalan sampai selesai. Hal ini karena for loop tidak mengunggu proses asynchronous selesai sebelum melanjutkan iterasi selanjutnya dan fungsi setTimeOut dipanggil dibeberapa waktu kedepan.Dan pada saat itu index loop(i) akan memiliki final value (i=6) untuk diberikan pada fungsi setTimeOut, ini dikarenakan deklarasi i dibuat dengan var yang mana memiliki sifar global scope. Oleh karena itu untuk mencegah ini pendeklarasian i dengan var diganti menjadi let sebab let akan bersifat lokal scope dan i yang diberikan pada setTimeOut akan sama dengan iterasi.
*/

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
// mengganti var menjadi let, let variabel dari ES6 membuat scope terpisah untuk blok kode yang memungkinkan loop untuk mencetak variabel berurutan.
for (let i = 1; i <= 5; i++) {
  console.log("first log: ", i); // 01 - Pertama
  setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}
