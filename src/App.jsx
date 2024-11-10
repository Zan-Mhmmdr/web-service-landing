// App.jsx
import Card from './components/Card';
import Content from './components/utils';

const App = () => {
  const schedule = [
    { day: 'Senin', tasks: [
      'Pelajari dasar HTML: Struktur dasar HTML, tag-tag penting seperti <div>, <header>, <footer>, <section>, <article>, dll.',
      'Mengenal HTML5: Elemen-elemen baru HTML5 seperti <header>, <footer>, <article>, <section>, dll.',
      'Pelajari dasar CSS: Mengenal selector, properti, dan value di CSS.',
      'Menata layout dasar menggunakan CSS (margin, padding, border, width, height).',
      'Latihan membuat halaman sederhana dengan HTML dan CSS.'
    ] },
    { day: 'Selasa', tasks: [
      'Pelajari lebih lanjut tentang CSS: Menggunakan selector yang lebih kompleks (class, id, pseudo-class).',
      'Pelajari posisi elemen: Static, relative, absolute, fixed, sticky.',
      'Mengenal Flexbox: Membuat layout responsif menggunakan Flexbox.',
      'Latihan membuat desain responsif dengan Flexbox.'
    ] },
    { day: 'Rabu', tasks: [
      'Pelajari dasar-dasar JavaScript: Variabel, tipe data, operator, dan fungsi.',
      'Mengenal DOM: Menangani elemen-elemen HTML menggunakan JavaScript.',
      'Manipulasi DOM: Menambah, mengedit, dan menghapus elemen.',
      'Pelajari event handling di JavaScript (click, mouseover, input events).'
    ] },
    { day: 'Kamis', tasks: [
      'Pelajari lebih dalam tentang JavaScript: Fungsi, array, objek, dan loop.',
      'Membuat interaksi menggunakan JavaScript: Form submission, toggle, modal.',
      'Pelajari konsep asynchronous di JavaScript: Callback, Promise, async/await.',
      'Latihan membuat aplikasi sederhana menggunakan JavaScript.'
    ] },
    { day: 'Jumat', tasks: [
      'Pelajari dasar Git: Penggunaan Git untuk version control.',
      'Mengenal perintah dasar Git: git init, git clone, git add, git commit, git push.',
      'Pelajari tentang GitHub: Membuat repository dan melakukan push ke GitHub.',
      'Latihan menggunakan Git dan GitHub untuk mengelola proyek kamu.'
    ] },
    { day: 'Sabtu', tasks: [
      'Pelajari dasar React.js: Komponen, JSX, props, dan state.',
      'Membuat aplikasi pertama menggunakan React (contoh: To-do list).',
      'Pelajari React hooks: useState, useEffect.',
      'Mengenal routing di React dengan React Router.'
    ] },
    { day: 'Minggu', tasks: [
      'Kerjakan proyek akhir: Buat proyek aplikasi sederhana dengan kombinasi HTML, CSS, JavaScript, dan React.',
      'Gunakan Git untuk mengelola proyek dan GitHub untuk menyimpan dan berbagi kode.',
      'Latihan mengimplementasikan semua yang telah dipelajari dalam minggu ini.'
    ] }
  ];

  return (
    <div className="container">
      {/* Baris pertama: Senin, Selasa, Rabu */}
      <div className="top-row">
        {schedule.slice(0, 3).map((item, index) => (
          <Card key={index}>
            <Content day={item.day} tasks={item.tasks} />
          </Card>
        ))}
      </div>

      {/* Baris kedua: Kamis, Jumat, Sabtu, Minggu */}
      <div className="bottom-row">
        {schedule.slice(3).map((item, index) => (
          <Card key={index}>
            <Content day={item.day} tasks={item.tasks} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;