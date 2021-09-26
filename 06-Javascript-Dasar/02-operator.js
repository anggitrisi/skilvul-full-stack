/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pengeluaran
// const gundam = 750000;
// const makan = 2000000;
// const kost = 1000000;
// const subscription = 250000;

// Pengeluaran dibuat sebagai object agar dinamis jika ditambah pengeluaran baru
const pengeluaran = {
  gundam : 750000,
  makan : 2000000,
  kost : 1000000,
  subscription : 250000
}
// Hitung Total Pengeluaran
let totalPengeluaran = 0;
for (const p in pengeluaran){
  totalPengeluaran += pengeluaran[p];
}

/// Gaji
// const gajiPokok = 5000000;
// const gajiBonus = 0.1 * gajiPokok;
// const gajiLembur = 0.05 * gajiPokok;

// Deklarasi Object Gaji
const gaji = {
  gajiPokok : 5000000,
} 
gaji.gajiBonus = 0.1 * gaji.gajiPokok
gaji.gajiLembur = 0.05 * gaji.gajiPokok

// Hitung Total Gaji
let totalGaji = 0 ;
for (property in gaji) {
  totalGaji += gaji[property]
}

/// Sisa Gaji
const sisaGaji = totalGaji - totalPengeluaran;
console.log("Sisa Gaji: " + sisaGaji)


/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = oneInString == oneInNumber;
console.log(`isSame : ${isSame}`)


/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher = studentA > studentB;
console.log(`isHigher: ${isHigher}`)


/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = oneInString === oneInNumber;
console.log(`final : ${final}`)
