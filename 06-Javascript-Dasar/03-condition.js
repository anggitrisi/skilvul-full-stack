/// Soal - 01
/// Buatlah sebuah kondisi dimana akan melakukan pengecekan terhadap user yang hendak bepergian menggunakan motor, ada beberapa hal yang perlu dilakukan salah satu-nya adalah
/// - kondisi dibuat menggunakn IF ELSE
/// - kondisi pertama akan mengecek apakah user sudah berusia kurang dari 18 tahun
/// - jika IYA, maka cetak tulisan "Anda belum cukup umur"
/// - jika TIDAK
///   buatlah kondisi lagi dimana akan melakukan cek terhadap user tersebut, apakah dia sudah memiliki SIM atau belum
///   - jika IYA, maka cetak tulisan "Selamat berkendara"
///   - jika Tidak, maka cetak tulisan "Diharapkan untuk membuat SIM terlebih dahulu"

const userAge = '18';
const drivingLicense = true;
if (userAge < 0 ){ // error handler untuk mengani input dibawah 0 
  console.log("Masukkan input dengan benar!") 
}
else if (userAge < 18){
  console.log("Anda Belum Cukup Umur")
} else {
  if (drivingLicense == true) {
    console.log("Selamat berkendara!")
  } else {
    console.log("Diharapkan untuk membuat SIM terlebih dahulu")
  }
}



/// Soal - 02
/// Buatlah sebuah kondisi yang akan melakukan konversi suhu dari celcius ke variable yang dituju (kelvin, fahrenheit, dan celsius)
/// - kondisi dibuat menggunakan switch case
/// - konversi celcius menjadi kelvin apabila user memasukan unit berupa "K"
/// - konversi celcius menjadi fahrenheit apabila user memasukan unit berupa "F"
/// - konversi celcius menjadi celcius apabila user memasukan unit berupa "C"
/// - menampilkan pesan "Maaf anda salah input", apabila variable tidak memenuhi semua kondisi yang ada
const temperature = 100; /// suhu
const unit = "F"; /// inputan
let celciusConverted;
switch (unit) {
  case "K":
    celciusConverted = temperature + 273.15;
    console.log(temperature + " C = " + celciusConverted + " K")
    break;
  case "F":
    celciusConverted = (temperature * (9/5)) + 32
    console.log(temperature + " C = " + celciusConverted + " F");
    break;
  case "C":
    celciusConverted = temperature
    console.log(temperature + " C = " + celciusConverted + " C");
    break;
  default:
    console.log("Maaf Anda Salah Input")
}
