var treeDisplayed = false; // Variable untuk melacak apakah pohon sudah ditampilkan atau belum
var clickCount = 0; // Variable untuk melacak jumlah klik tombol

function toggleElement() {
  var sun = document.getElementById("sun");
  var moon = document.getElementById("moon");
  var tree = document.getElementById("tree");
  var sky = document.getElementById("sky");
  var text = document.getElementById("text");
  var darkSkyText = document.getElementById("darkSkyText"); // Tambahkan variabel untuk teks pada langit gelap
  var treeText = document.getElementById("treeText"); // Tambahkan variabel untuk teks di sebelah pohon pada langit gelap

  clickCount++; // Increment click count setiap kali tombol ditekan

  if (clickCount === 1) { // Jika ini adalah klik pertama
    text.style.display = "none"; // Sembunyikan teks ketika matahari muncul
  } else if (clickCount === 2) { // Jika ini adalah klik kedua
    sun.style.backgroundColor = "#fff"; // Ubah warna latar belakang matahari menjadi putih
    moon.style.display = "block"; // Tampilkan bulan
    sky.style.backgroundColor = "#000"; // Warna langit menjadi gelap
    darkSkyText.style.display = "block"; // Tampilkan teks pada langit gelap
    treeText.style.display = "block"; // Tampilkan teks di sebelah pohon pada langit gelap
    clickCount = 0; // Reset click count untuk klik selanjutnya
    treeDisplayed = false; // Reset variabel pohon ditampilkan
    return; // Keluar dari fungsi toggleElement
  } else if (clickCount === 3) { // Jika ini adalah klik ketiga
    sun.style.backgroundColor = "#fff"; // Ubah warna latar belakang matahari menjadi putih
    sky.style.backgroundColor = "#000"; // Warna langit tetap gelap
    clickCount = 0; // Reset click count untuk klik selanjutnya
    return; // Keluar dari fungsi toggleElement
  }

  if (sun.style.display === "none") {
    sun.style.display = "block";
    sky.style.backgroundColor = "#87CEEB"; // Warna langit saat matahari muncul
    sun.style.top = "calc(50% - 50px)"; // Posisi awal matahari di tengah vertikal
    sun.style.left = "-100px"; // Posisi awal matahari di luar layar kiri
    animateSun(); // Memulai animasi matahari
    if (!treeDisplayed) { // Jika pohon belum ditampilkan
      tree.style.display = "block";
      treeDisplayed = true; // Set variable ke true untuk menandakan pohon sudah ditampilkan
    }
  } else {
    sun.style.display = "none";
    sky.style.backgroundColor = "#87CEEB"; // Warna langit cerah
  }
}

function animateSun() {
  var sun = document.getElementById("sun");
  var sky = document.getElementById("sky");
  var posX = -100; // posisi awal matahari di luar layar kiri
  var posY = -100; // posisi awal matahari di luar layar atas
  var interval = setInterval(frame, 10);

  sun.onclick = function() {
    sky.style.backgroundColor = "#FFA500"; // Warna langit menjadi oranye saat matahari ditekan
  };

  function frame() {
    if (posX >= 130 || posY >= 130) { // Menghentikan animasi saat matahari mencapai posisi target
      clearInterval(interval);
    } else {
      posX++; // Posisi matahari bergerak ke kanan
      posY++; // Posisi matahari bergerak ke bawah
      sun.style.left = posX + 'px';
      sun.style.top = posY + 'px';
    }
  }
}
