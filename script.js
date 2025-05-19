let angkaRahasia = Math.floor(Math.random() * 100) + 1;
let jumlahPercobaan = 0;

function cekTebakan() {
  const input = document.getElementById("tebakanInput");
  const hasil = document.getElementById("hasil");
  const percobaan = document.getElementById("percobaan");
  const tebakan = parseInt(input.value);

  if (isNaN(tebakan)) {
    hasil.textContent = "⚠️ Masukkan angka yang valid!";
    hasil.className = "text-danger";
    return;
  }

  jumlahPercobaan++;

  if (tebakan < angkaRahasia) {
    hasil.textContent = "📉 Terlalu kecil!";
    hasil.className = "text-warning";
  } else if (tebakan > angkaRahasia) {
    hasil.textContent = "📈 Terlalu besar!";
    hasil.className = "text-warning";
  } else {
    hasil.textContent = `🎉 Selamat! Kamu menebaknya dalam ${jumlahPercobaan} percobaan.`;
    hasil.className = "text-success";
  }

  percobaan.textContent = `Jumlah percobaan: ${jumlahPercobaan}`;
}

function resetGame() {
  angkaRahasia = Math.floor(Math.random() * 100) + 1;
  jumlahPercobaan = 0;
  document.getElementById("tebakanInput").value = "";
  document.getElementById("hasil").textContent = "";
  document.getElementById("percobaan").textContent = "";
}
