1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?

   Node js adalaha platform javascript yang dapat berjalan di backend atau server-side di komputer kita secara langsung. Dimana node js ini berjalan pada v8 engine dan mengeksekusi kode javascript diluar web browser.

   Perbedaan Javascript dan Node.js adalah javascript adalah bahasa pemrograman yang browser/client-side oriented sedangkan node.js adalah runtime environment javascript backend yang menggunakan javascript untuk melakukan proses di sisi server.

2. Mohon jelaskan arsitektur dari Node.js?

- Single thread, hanya memiliki satu tumpukan panggilan yang digunakan untuk menjalankan program. Menggunakan call stack untuk melakukan manajemen single thread. Ketika terdapat perintah baru makan akan ditambahkan(push) dan akan dikeluarkan ketika perintahnya sudah selesai (pop)

- Even loop, event akan memeriksa antrian di call stack secara terus menerus dan apabila kosong maka akan menambahkan antrian baru dari event queue sampai semua perintah selesai dieksekusi. Hal ini membuat node.js yang memiliki arsitektur single thread akan terlihat seakan akan multi thread

- Server side scripting, NodeJS kita dapat menjalankan javascript di server side menggunakan terminal command line menggunakan perintah "node".

3. Ape perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?

   Built-in module adalah module bawaan dari node.js, module yang sudah include ketika kita menginstal node.js. External module merupakan module dari 3rd party yang harus kita install terlebih dahulu agar bisa digunakan pada node.js, external module ini dapat diinstal spesifik pada project tertentu atau secara global. Custom module merupakan module yang kita definisikan sendiri misalnya untuk satu project tertentu.

4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

- Contoh built-in module seperti: process, events, errors, url

- Contoh external module seperti: nodemon, express, mysql, sequelize

- Contoh custom module seperti: kita membuat suatu file javascript yang berisi fungsionalitas tertentu misalkan seperti di bawah ini sebuah simple logging module yang memberikan log informasi, warning atau eror pada program, kemudian module tersebut diexport

```
  const log = {
      info: function (info) {
          console.log('Info: ' + info);
      },
      warning:function (warning) {
          console.log('Warning: ' + warning);
      },
      error:function (error) {
          console.log('Error: ' + error);
      }
  };

  module.exports = log
```
