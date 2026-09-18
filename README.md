# NARRATE Backend API

Backend REST API untuk aplikasi **NARRATE**, sebuah aplikasi personal blog berbasis Flutter.

Backend dibangun menggunakan **Express.js + TypeScript** dengan **PostgreSQL** sebagai database. Project ini menggunakan **Drizzle ORM** untuk pengelolaan database, **Zod** untuk validasi data, serta **Multer dan Cloudinary** untuk upload gambar.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Drizzle ORM
- Zod
- Multer
- Cloudinary

## Fitur

- CRUD artikel
- Filter artikel berdasarkan status
- Kategori artikel
- Tags artikel
- Profile pemilik blog
- Saved / bookmark artikel
- Upload gambar artikel
- Upload avatar profile
- Validasi data
- REST API dengan response JSON

## Database

Database NARRATE terdiri dari:

- `categories`
- `posts`
- `tags`
- `post_tags`
- `profiles`
- `saved_posts`

Relasi utama:

```text
Categories 1 ---- N Posts
Categories 1 ---- N Tags
Posts      N ---- N Tags
```

Relasi **Posts dan Tags** menggunakan `post_tags` sebagai tabel penghubung.

Beberapa Foreign Key menggunakan `ON DELETE CASCADE` agar data relasi ikut dibersihkan ketika data induknya dihapus.

## API Endpoints

### Posts

| Method | Endpoint                     | Fungsi                          |
| ------ | ---------------------------- | ------------------------------- |
| GET    | `/api/posts`                 | Mengambil semua published posts |
| GET    | `/api/posts?status=draft`    | Mengambil draft                 |
| GET    | `/api/posts?status=archived` | Mengambil archived posts        |
| GET    | `/api/posts/:id`             | Mengambil post berdasarkan ID   |
| POST   | `/api/posts`                 | Membuat post                    |
| PUT    | `/api/posts/:id`             | Mengubah post                   |
| DELETE | `/api/posts/:id`             | Menghapus post                  |

### Categories

| Method | Endpoint              | Fungsi                            |
| ------ | --------------------- | --------------------------------- |
| GET    | `/api/categories`     | Mengambil categories              |
| GET    | `/api/categories/:id` | Mengambil category berdasarkan ID |

### Tags

| Method | Endpoint                 | Fungsi                          |
| ------ | ------------------------ | ------------------------------- |
| GET    | `/api/tags`              | Mengambil tags                  |
| GET    | `/api/tags?categoryId=1` | Filter tag berdasarkan category |
| GET    | `/api/tags/:id`          | Mengambil tag berdasarkan ID    |
| POST   | `/api/tags`              | Membuat tag                     |
| PUT    | `/api/tags/:id`          | Mengubah tag                    |
| DELETE | `/api/tags/:id`          | Menghapus tag                   |

### Profile

| Method | Endpoint       | Fungsi            |
| ------ | -------------- | ----------------- |
| GET    | `/api/profile` | Mengambil profile |
| PUT    | `/api/profile` | Mengubah profile  |

### Saved

| Method | Endpoint             | Fungsi                    |
| ------ | -------------------- | ------------------------- |
| GET    | `/api/saved`         | Mengambil saved posts     |
| POST   | `/api/saved/:postId` | Menyimpan post            |
| DELETE | `/api/saved/:postId` | Menghapus post dari Saved |

## Status Artikel

Artikel memiliki tiga status:

- `draft` — artikel masih disiapkan
- `published` — artikel sudah dipublikasikan
- `archived` — artikel diarsipkan

## Alur Aplikasi

```text
Flutter
   ↓
HTTP Request
   ↓
Express REST API
   ↓
Controller
   ↓
Zod Validation
   ↓
Drizzle ORM
   ↓
PostgreSQL
   ↓
JSON Response
   ↓
Flutter
```

## Environment Variables

Buat file `.env`:

```env
DATABASE_URL=postgresql://USERNAME:PASSWORD@localhost:5432/db_blog_app

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> Jangan memasukkan file `.env` atau API Secret ke repository.

## Installation

Clone repository dan install dependencies:

```bash
git clone <repository-url>
cd <nama-folder-project>
npm install
```

Buat database PostgreSQL:

```text
db_blog_app
```

Push schema menggunakan Drizzle:

```bash
npx drizzle-kit push
```

Jalankan development server:

```bash
npm run dev
```

## API Testing

API dapat diuji menggunakan **Postman**.

Untuk endpoint yang menggunakan upload gambar seperti Create Post dan Update Profile, request dikirim menggunakan `multipart/form-data`.

## Author

**NARRATE Blog Project**

Project Aplikasi Blog — Pemrograman Web Dinamis, Basis Data, dan Pemrograman Mobile.
