# Hotel Booking System

Nama: Rafa Agusta Putro Harsono

## Deskripsi

Backend untuk sistem pemesanan hotel yang dibangun menggunakan Node.js, Express, dan Sequelize. Proyek ini menyediakan API untuk mengelola data hotel, guest, room, booking, dan payment.

## Fitur

- **CRUD untuk Hotel**: Buat, baca, perbarui, dan hapus data hotel.
- **CRUD untuk Guest**: Buat, baca, perbarui, dan hapus data guest.
- **CRUD untuk Room**: Buat, baca, perbarui, dan hapus data room.
- **CRUD untuk Booking**: Buat, baca, perbarui, dan hapus data booking.
- **CRUD untuk Payment**: Buat, baca, perbarui, dan hapus data payment.
- **Relasi antar model**: Menggunakan Sequelize untuk mengelola relasi antar model (Hotel, Room, Guest, Booking, Payment).

## Prerequisites

- Node.js
- MySQL
- NPM atau Yarn

## Instalasi

1. Install dependensi:

   ```bash
   npm install
   ```

2. Buat file `.env` di root proyek dan tambahkan konfigurasi database Anda:

```plaintext
DB_NAME=your_database_name
DB_USER=root
DB_PASSWORD=your_password
PORT=port_number
```

3. Jalankan migrasi dan seeder untuk mengisi database dengan data awal:
   ```bash
   node backend/seeders/seeder.js
   ```

## Menjalankan Aplikasi

Untuk menjalankan server, gunakan perintah berikut:

```bash
npm start
```

Server akan berjalan pada port yang Anda tentukan di file `.env`.

## API Endpoints

### Hotel

- `GET`: Mengambil semua data hotel.
- `POST`: Menambahkan data hotel baru.
- `PUT`: Mengubah data hotel berdasarkan ID.
- `DELETE`: Menghapus data hotel berdasarkan ID.

### Guest

- `GET`: Mengambil semua data guest.
- `POST`: Menambahkan data guest baru.
- `PUT`: Mengubah data guest berdasarkan ID.
- `DELETE`: Menghapus data guest berdasarkan ID.

### Room

- `GET`: Mengambil semua data room.
- `POST`: Menambahkan data room baru.
- `PUT`: Mengubah data room berdasarkan ID.
- `DELETE`: Menghapus data room berdasarkan ID.

### Booking

- `GET`: Mengambil semua data booking.
- `POST`: Menambahkan data booking baru.
- `PUT`: Mengubah data booking berdasarkan ID.
- `DELETE`: Menghapus data booking berdasarkan ID.

### Payment

- `GET`: Mengambil semua data payment.
- `POST`: Menambahkan data payment baru.
- `PUT`: Mengubah data payment berdasarkan ID.
- `DELETE`: Menghapus data payment berdasarkan ID.