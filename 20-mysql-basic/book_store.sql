--SHOW database untuk melihat list database yang ada pada mysql
SHOW DATABASES;

--CREATE database bernama bookstore
CREATE DATABASE bookstore;

--USE database bookstore
USE bookstore;

--SHOW seluruh table yang ada pada database bookstore
SHOW TABLES;

--Buatlah table bernama books dengan attribute/column yang berisi..
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author1 VARCHAR(100) NOT NULL,
    author2 VARCHAR(100),
    author3 VARCHAR(100),
    title VARCHAR(100),
    description VARCHAR(255),
    place_sell CHAR(3),
    stock INT DEFAULT (0),
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

--Pada suatu waktu, kamu harus mengupdate column dari table books yang sudah ada. Berikut update yang harus dilakukan:
ALTER TABLE books ADD (
    price INT DEFAULT(0),
    status ENUM('available', 'out of stock', 'limited')
    );

 ALTER TABLE books DROP place_sell;

--INSERT 3 data untuk semua column yang ada pada table books
INSERT INTO books(author1, author2, author3, title, description, stock, price, status) VALUES
    ('ana','grace','mina','buku pertama', 'buku ini bercerita tentang...', 20, 75000, 'available'),
    ('joko','anwar','ja','buku kedua', 'sinopsis buku ini...', 0, 125000, 'out of stock'),
    ('agatha','cristie','syntia','buku ketiga', 'adalah seorang...', 3, 200000, 'limited');

--SELECT semua row pada table books
SELECT * FROM books;

--SELECT menggunakan ALIAS. Column id digantikan ID, author1 digantikan A1, author2 digantikan A2, author3 digantikan A3.
SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;

--SELECT data menggunakan WHERE untuk id tertentu
SELECT * FROM books WHERE id = 1 ;

--SELECT data menggunakan WHERE untuk dengan operator logical AND
SELECT * FROM books WHERE author1="joko" AND author2="anwar";

--SELECT data menggunakan WHERE untuk dengan operator logical OR
SELECT * FROM books WHERE author1="joko" OR author1="agatha";

--SELECT data menggunakan WHERE untuk dengan operator logical NOT
SELECT * FROM books WHERE NOT(status="out of stock");

--SELECT seluruh column dari table bookstore dan diurutkan secara ASC berdasarkan id
SELECT * FROM books ORDER BY id ASC;

--SELECT seluruh column dan berikan LIMIT untuk 2 row saja
SELECT * FROM books LIMIT 2;

--Pilih 1 row untuk dilakukan UPDATE pada column author1 dan price.
UPDATE books set author1="najwa", price=150000 where id=1;

--Pilih 1 row untuk dilakukan DELETE
DELETE FROM books WHERE id=1;