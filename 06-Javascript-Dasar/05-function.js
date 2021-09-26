/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE


function taxCalc(salary) { 
  let pajak; // deklarasi variabel pajak

  // handler error untuk mengecek apakah input yang dimasukkan adalah angka
  if(typeof salary !== "number"){
    return "Anda hanya diizinkan memasukkan angka!";
  } 

  // handler error untuk mengecek apakah input yang dimasukkan > 0
  else if(salary < 0){
    return "Masukkan angka diatas 0";
  } else {
    // print keterangan salary yan diinput dengan format rupuiah
    console.log("Salary : \n" +  Intl.NumberFormat("id-ID").format(salary)); // print salary
    console.log("Pajak : ");

    // penghasilan dibawah 5000000
    if(salary < 5000000){
      return '0';
    } 
    // penghasilan diantara 5000000-10000000
    else if(salary >= 5000000 && salary <= 10000000) {
      pajak = 0.05 * salary;
      return new Intl.NumberFormat("id-ID").format(pajak) // format ke rupiah
    } 
    // penghasilan diantara 10000000 -20000000
    else if(salary >= 10000000 && salary <= 20000000){
      pajak = 0.1 * salary;
      return new Intl.NumberFormat("id-ID").format(pajak) // format ke rupiah
    } 
    else {
      pajak = 0.1 * salary;
      return new Intl.NumberFormat("id-ID").format(pajak) // format ke rupiah
    }
  }
}

console.log('=====taxCalc()========')
console.log(taxCalc(4500000))
console.log(taxCalc(5000000))
console.log(taxCalc(20000000))


/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(height,weight) { 
  // error handler untuk mengecek apakah parameter height dan weigh yang diinput adalah angka
  if(typeof height !== "number" || typeof weight !== "number"){
    return "Tolong cek input yang anda masukkan. Hanya menerima angka!"
  } else {
    let bmi = ( weight/(height**2) ) * 10000;

    //print keterangan weight, height, dan besar bmi
    console.log('height, weight : ' + height + ',' + weight)
    console.log ('bmi : ' + bmi.toFixed(2));

    if (bmi < 18.5) {
      return "under weight"
    } else if ( bmi > 18.5 && bmi < 24.9) {
      return "normal"
    } else if ( bmi > 25 && bmi < 29.9) {
      return "over weight"
    } else if ( bmi > 30 && bmi <34.9) {
      return "obese"
    } else {
      return "extremely obese"
    }
  }
}


console.log('=====taxCalc()=====')
const BMInumber = checkBMI(170,80)
console.log(BMInumber)

const BMInumber2 = checkBMI(160,80)
console.log(BMInumber2)

/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) { 
  // cek apakah input adalah string
  if(typeof sentence !== "string"){
    return "Hanya diizinkan menginput string!"
  } 
  // mengubah semua karakter menjadi huruf kecil, menghindari kapital dipertengahan kata
  sentence = sentence.toLowerCase();

  // membagi string menjadi array dengan " " sebagai seperator dan disimpan kedalam words[]
  const words = sentence.split(" ")

  // display kalimat yang diinput
  console.log("sentence : " + sentence)

  for (let i = 0 ; i < words.length ; i++) 
  {
    // ubah setiap huruf pertama/ char ke 0 di setiap nilai array index ke i menjadi kapital
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1)
  }
  // gabungkan nilai-nilai array dengan karakter " " sebagai penggabung
  return words.join(" ")
 }

 console.log('===== convToUpperCase(sentence)=====')
 const sentenceConverted = convToUpperCase("heLlo bandung")
 console.log(sentenceConverted)
 const sentenceConverted2 = convToUpperCase("Helloworldwide")
 console.log(sentenceConverted2)

 /// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE

function firstNonRepeatedChar(word) { //alloha

  if (word.indexOf(' ') >= 0 ){ //Mengecek jika kata tersebut mengandung space (jumlah ' ' dari word >= 0)

    return "Kata tidak boleh dipisah!"
  } 
  const characterCount = {}; // buat objek yang menampung setiap karakter yang menyusun word dengan isi jumlahnya 
                            // dengan huruf sebagai properti dan jumlahnya sebagai value
                            //{a: 2, l:2, o:1, h:1}

  // perulangan untuk menambahkan setiap huruf penyusun kata sebgai properti objek dan jumlahnya sebagai value
  for(let i = 0; i < word.length; i++){    
    let char = word[i];
    characterCount[char] = characterCount[char] + 1 || 1 // jika character x sudah ada jumlahnya ditambah 1,
                                        // jika belum ada maka jumlahnya  1                                               
                                        // a=1, l=1, l=1+1, o=1, h=1, a=1+1
  }
  // perulangan untuk mengecek properti huruf yang memiliki value 1
  for(let i = 0; i < word.length; i++){                 
    let char = word[i]
    if(characterCount[char]===1){ // jika character x tersebut punya jumlah 1 maka return character x
                                  // o===1(true)
      return char;                // return o
    }
  }
  return " "    // jika tidak ada karakter yang sama dengan 1 return " "
}

console.log('===== convToUpperCase(sentence)=====')

console.log(firstNonRepeatedChar("hello world"))
console.log(firstNonRepeatedChar("alloha"))
console.log(firstNonRepeatedChar("wooohoowh"))
