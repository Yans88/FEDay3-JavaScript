//Jawaban dari Soal 1
var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, terdaftar];

function perkenalan(){
  let asal = "Indonesia";
  return console.log("Perkenalkan nama saya "+nama+" Nomor urut "+a+" sekarang sedang mengikuti "+b+" berasal dari "+asal);
}

//terdaftar=true;
if(terdaftar === true) console.log(nama +" terdaftar sebagai kegiatan kampus merdeka");
// atau kondisi terdaftarnya diubah menjadi false;
//if(terdaftar === false) console.log(nama +" terdaftar sebagai kegiatan kampus merdeka");

a=b;
// nama=b; => ini error karena variable name adalah constant.

console.log("Jawaban dari soal No. 1.a, index ke 2 dari variable lengkap_arr (baris ke 6) adalah "+lengkap_arr[2]);
console.log("Jawaban dari soal No. 1.b, untuk menampilkan baris ke 22 sesuai dengan soal(dicode ini baris ke 14) maka terdaftar di set menjadi true atau kondisi terdaftar pada baris ke 14 diubah menjadi false(if(terdaftar === false))");
console.log("Jawaban dari soal No. 1.c, Melakukan pemanggilan function perkenalan");
perkenalan();
// End of Jawaban dari Soal 1


//Jawaban dari Soal 2
console.log("Jawaban dari soal No. 2.a :  karena tidak sesuai dengan kondisi yang diharapkan, kondisi yang diharapkan adalah nilai terdaftar harus true, sementara pada baris ke 6 di set dengan nilai false.");
console.log("Jawaban dari soal No. 2.b : karena variable nama adalah constant, tidak bisa di assign ulang.");
console.log("Jawaban dari soal No. 2.c : iya, karena yang menyebabkan error pada baris sebelumnya(baris ke 26) sudah tidak dibaca lagi oleh interpreter");
// End of Jawaban dari Soal 2


//Jawaban dari Soal 3
const foo = ['Budi','Sita','Ayu'];
let a2 = foo[0];
let b2 = foo[1];
let c = foo[2];
console.log("Jawaban dari soal No. 3 variable a : "+a2);
console.log("Jawaban dari soal No. 3 variable b : "+b2);
console.log("Jawaban dari soal No. 3 variable c : "+c);
// End of Jawaban dari Soal 3


//Jawaban dari Soal 4
const bdays = ['10-17', '05-19','20-19'].map(function(val){
	return val.replace("-","/");
});
console.log("Jawaban dari soal No. 4 : "+bdays);
// End of Jawaban dari Soal 4


//Jawaban dari Soal 5
const numbers = [1, 2, 3, 4, 5, 6].map(function(val){
	return val * 2;
});
console.log("Jawaban dari soal No. 5 : "+numbers);
// End of Jawaban dari Soal 5


//Jawaban dari Soal 6
const arr = [1.5, 2.56, 5.1, 12.33].map(Math.round);
console.log("Jawaban dari soal No. 6 : "+arr);
// End of Jawaban dari Soal 6

