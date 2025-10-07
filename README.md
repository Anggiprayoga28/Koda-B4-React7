# Aplikasi To Do List

Aplikasi To Do List yang modern, responsif, dan kaya fitur, dibangun dengan React dan Tailwind CSS. Kelola tugas Anda secara efisien dengan antarmuka yang bersih dan intuitif.


## Fitur

- **Manajemen Tugas**: Membuat, menyelesaikan, dan menghapus tugas
- **Tingkat Prioritas**: Tag prioritas Tinggi, Sedang, dan Rendah
- **Pelacakan Status**: Status Tertunda, Sedang Dikerjakan, dan Selesai
- **Pemfilteran Cerdas**: Filter tugas berdasarkan status (Aktif, Selesai, Sedang Dikerjakan, Tertunda)
- **Penyimpanan Lokal**: Persistensi data otomatis - tugas tetap tersimpan bahkan setelah pembaruan
- **UI Modern**: Desain bersih dan responsif dengan gradien Latar belakang
- **Pembaruan Real-Time**: Pembaruan penghitung instan dan perubahan status
- **Responsif**: Bekerja dengan lancar di perangkat desktop dan mobile


## 📸 Tangkapan Layar

### Tampilan Tugas Aktif
```
Menampilkan semua tugas yang belum selesai
```

### Tampilan Tugas Selesai
```
Menampilkan semua tugas yang telah selesai secara terpisah
```

## Teknologi

- **React** 
- **Tailwind CSS** 
- **Lucide React** 
- **Vite** 

## Komponen

### `App.jsx`
Komponen orkestrasi utama yang mengelola:
- Status global untuk todo
- Status filter
- Operasi CRUD (Buat, Baca, Perbarui, Hapus)
- Integrasi LocalStorage

### `Sidebar.jsx`
- Tampilan profil pengguna
- Menu navigasi
- Tombol tambah tugas
- Opsi keluar

### `Header.jsx`
- Judul halaman
- Fungsionalitas pencarian
- Tab filter dengan penghitung
- Penyorotan filter aktif

### `InputForm.jsx`
- Kolom input tugas (menggunakan ref)
- Input nama proyek
- Pemilih prioritas
- Tombol Tambah/Batal
- Dukungan keyboard (Enter untuk kirim)

### `TodoRow.jsx`
- Kotak centang untuk pengalih penyelesaian
- Tampilan nama tugas dan proyek
- Lencana prioritas
- Lencana status
- Informasi tanggal
- Tombol hapus

### `Table.jsx`
- Struktur tabel dengan header
- Merender beberapa komponen TodoRow
- Penanganan status kosong

## Penggunaan

### Menambahkan Tugas

1. Klik tombol **"Add new task"**
2. Masukkan nama tugas (wajib)
3. Masukkan nama proyek (opsional)
4. Pilih tingkat prioritas
5. Klik **"Add task"** atau tekan **Enter**

### Menyelesaikan Tugas

1. Klik kotak centang di samping tugas
2. Tugas otomatis dipindahkan ke tab "Selesai"
3. Penghitung diperbarui secara real-time


### Menghapus Tugas

1. Klik ikon tempat sampah di samping tugas
2. Konfirmasikan penghapusan di dialog
3. Tugas dihapus secara permanen

