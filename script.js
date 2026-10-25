//script.js

// 1. Menampilkan Output
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}
function operasiDasar(a,b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);

if (inputNilai === null || inputNilai.trim() === "" ||
    Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
   alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
}

function cekBilangan() {
const input = document.getElementById("bilangan").value;
const angka = Number(input);
const hasil = document.getElementById("hasilBilangan");
if (input.trim() === "" || !Number.isInteger(angka)) {
hasil.textContent = "Masukkan bilangan bulat yang valid.";
} else if (angka % 2 === 0) {
hasil.textContent = "Bilangan genap";
} else {
hasil.textContent = "Bilangan ganjil";
}
}
function ubahWarnaLatar(warna) {
document.body.style.backgroundColor = warna;
}


function hitungNilaiAkhir(tugas, uts, uas) {
return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}
function tentukanPredikat(nilai) {
if (nilai >= 85) return "A";
if (nilai >= 75) return "B";
if (nilai >= 60) return "C";
if (nilai >= 50) return "D";
return "E";
}

const tugas = 85;
const uts = 78;
const uas = 88;
const akhir = hitungNilaiAkhir(tugas, uts, uas);
console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir));
console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");

// 8. DOM dan checkbox menu makanan
    const daftarMenu = document.querySelectorAll(".menu");
    daftarMenu.forEach((item) => {
        item.addEventListener("change", hitungTotal);
    });
    function hitungTotal() {
        let checkboxes = document.querySelectorAll(".menu");
        let totalHarga = 0;
        for (let i=0;
            i < checkboxes.length;
            i++){
                if (checkboxes[i].checked) {
                    totalHarga += Number(checkboxes[i].value);
                }
            }
        document.getElementById("total").textContent = totalHarga;
    }

// 9. Mini Project — Kalkulator Nilai Mahasiswa
    function hitungNilaiAkhir(tugas, uts, uas) {
        return tugas * 0.30 + uts * 0.30 + uas * 0.40;
    }
    function tentukanPredikat(nilai) {
        if (nilai >= 85) return "A";
        if (nilai >= 75) return "B";
        if (nilai >= 60) return "C";
        if (nilai >= 50) return "D";
        return "E";
    }
    function tentukanStatus(nilai){
        return nilai >= 60 ? "Lulus" : "Belum Lulus";
    }

    function tampilkanNilai(){
        let tugas = Number(document.getElementById("tugas").value);
        let uts = Number(document.getElementById("uts").value);
        let uas = Number(document.getElementById("uas").value);

        if (isNaN(tugas)) tugas = 0;
        if (isNaN(uts)) uts = 0;
        if (isNaN(uas)) uas = 0;
        
        let akhir = hitungNilaiAkhir(tugas, uts, uas);
        let predikat = tentukanPredikat(akhir);
        let status = tentukanStatus(akhir);

        document.getElementById("outAkhir").textContent = akhir.toFixed(2);
        document.getElementById("outPredikat").textContent = predikat;
        document.getElementById("outStatus").textContent = status;
        document.getElementById("hasilNilai").style.display = "block";
        document.getElementById("btnHitung").addEventListener("click", tampilkanNilai)
    }