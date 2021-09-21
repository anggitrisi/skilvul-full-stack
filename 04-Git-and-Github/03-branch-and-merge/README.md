

##### 01 What does `git clean` do?
`git clean` untuk menghapus atau membersikan untracked files dan direktori dari working tree atau dengan kata lain menghapus file dan direktori yang baru dibuat dalam working directory dan belum dimasukkan ke version control. `git clean` memiliki cara kerja yang sama dengan `rm` untuk menghapus file secara permanen dan tidak bisa diundo (dibatalkan/dikembalikan).

##### 02 What do the `-d` and `-f` flags for git clean do?
`-d` : directory, merupakan option untuk menghapus directory

`f` : singkatan dari force, merupakan required option untuk menjalankan penghapusan, , jika tidak ditambahkan `-f` maka git tidak akan melakukan penghapusan kecuali konfigurasi option _clean.requireForce_ diset menjadi false. Kombinasi `-d` dan `-f` akan memberitahu kepada gi clean untuk menghapus untracked directory.

##### 03 What `git` command creates a branch?
`git branch <branch name>`

##### 04 What is the difference between a fast-forward and recursive merge?
**fast-forward merge** terjadi jika suatu branch dengan branch yang di-merge memiliki history yang linear (dalam direct path)

**recursive merge** terjadi jika jika suatu branch dengan branch yang di-merge tidak memiliki history yang linear (tidak direct path) sehingga untuk merging dilakukan commit baru

##### 05 What `git` command changes to another branch?
`git checkout <branch name>`

##### 06 How do you remove modified or deleted files from the working directory?
`git checkout <file_name>` (to discard changes in working directory) atau `git rm -f <file_name>` (to remove modified files from working directory)

`git add -u` (to staged the changes, it will also remove the modified or deleted files from working directory)

##### 07 What `git` command deletes a branch?
`git branch -d <branch name>` menghapus branch secara lokal (untuk merge yang sudah di merge atau push)

`git branch -D <branch name>` menghapus branch secara lokal (untuk merge yang belum di merge atau push)

`git push <remote> --delete <branch name>` menghapus branch secara remote

##### 08 What does the `git diff` command do?
`git diff` menampilkan isi dari file yang berubah dari commit terakhir dengan yang kita buat di working directory

##### 09 How do you remove files from the staging area?
`git reset HEAD <nama file>` 

`git` restore --staged <nama file>`

##### 10 How do merge conflicts happen?
Ketika kita melakukan merge pada 2 branch dimana pada masing-masing branch ini kita melakukan perubahann pada file yang sama dan lokasi yang sama. Atau sederhananya dilakukan modifikasi pada baris yang sama dan file yang sama