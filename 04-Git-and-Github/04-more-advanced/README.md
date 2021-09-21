##### 01 What is the difference between `git reset` and `git revert`. When would you use one over the other?
`git reset` bekerja dengan kembali ke commit yang dituju dengan menghilangkan/menghapus histori commit lain setelah commit yang kita tuju tersebut.

`git revert` bekerja dengan cara meng-undo perubahan dengan menjadikannya sebuah commit sehingga histori commit sebelumnya tidak hilang.

`git reset` digunakan ketika kita sudah membuat suatu perubahan dan sudah melakukan commit tapi masih tersimpan di local/private repo yang kita miliki, belum dipush ke public repository nya, kemudian kita memutuskan bahwa perubahan tersebut tidak cocok dan tidak ingin ditambahkan, maka kita dapat menggunakan `git reset` ini untuk mengembalikan riwayat commitnya seperti semula seolah-olah kita belum pernah membuat perubahan. `git reset` juga biasanya digunakan untuk membuang perubahan yang belum dicommit atau menghapus file dari staging area.
`git revert` digunakan ketika kita sudah membuat perubahan dan sudah melakukan commit serta mempublish perubahan tersebut pada public repository, namun setelah dilihat-lihat lagi kita memutuskan perubahan tersebut kurang cocok dan ingin dikembalikan seperti sebelumnya serta menyimpan riwayat pengembalian tersebut agar dapat diketahui oleh tim yang lain atau agar di masa depan dapat diketahui bahwa fitur yang sebelumnya sudah pernah dibuat itu kurang cocok maka kita dapat menggunakan `git revert`.


##### 02 What is the difference between `git merge` and `git rebase`. When would you use one over the other?
`git merge` bekerja dengan mengintegrasikan perubahan dari suatu branch dengan branch yang di-merge, dengan cara ini jika 2 branch tersebut tidak berada pada direct path maka proses merging akan membuat commit baru (three-way-merging)

`git rebase` bekerja dengan memindahkan seluruh sejarah commit dari sebuah branch untuk digabung ke ujung (HEAD) branch lain. Bedanya dari merge adalah merge meleburkan state terakhir dari kedua branch sementara rebase memindahkan seluruh sejarah commit.

`merge` sebaiknya digunakan ketika kita ingin memasukkan pembaruan atau menambahkan perubahan dari branch fitur ke branch utamanya dan ketika kita ingin history commit yang ada tetap seperti seharusnya agar dapat tetap ditrack kapan perubahan-perubahan baru dibuat dan ditambahkan ke branch utama. Dan `merge` akan lebih cocok digunakan untuk project yang dikerjakan dalam tim yang cukup besar karena jika menggunakan `rebase` maka bisa berdampak pada orang lain juga
`rebase` sebaiknya digunakan ketika kita ingin mengambil perubahan dari branch utama ke branch fiturnya, dengan kata lain ketika kita ingin branch fitur up to date dengan branch utamanya atau jika kita lebih menginginkan history commit yang sederhana dan bersih agar lebih readable. Dan `rebase` ini lebih cocok digunakan pada project yang dikerjakan secara individual atau pada tim dengan skala kecil.
Pemilihan antara merge dan rebase ini sebaiknya disesuaikan lagi dengan kebutuhan masing-masing, mana yang lebih baik diterapkan untuk project yang sedang 

##### 03 What is the difference between `git stash pop` and `git stash apply`. When would you use one over the other?
`git stash pop` untuk kembali ke branch dimana dan mengembalikan progres yang telah disimpan dalam stash sebelumnya diikuti dengan menghapus history stash

`git stash apply` untuk kembali ke branch dimana dan mengembalikan progres yang telah disimpan dalam stash sebelumnya tanpa menghapus stash yang telah di-restore ke sumber

`git stash appl`y dapat digunakan jika kita ingin mengapply perubahan tersebut ke berbagai cabang sehingga tidak perlu menuliskannya berulang ulang dan `git stash pop` dapat digunakan jika hanya ingin menerapkannya ke satu file itu saja.



##### 04 What kinds of things can you do in interactive mode when rebasing?
Dengan interactive rebase kita dapat menyesuaikan bagaimana setiap commit akan diterapkan kembali ketika melakukan rebase. Seperti misalnya memisahkan commit, menggabungkan beberapa commit yang mirip menjadi satu, menyusun ulang atau mengganti urutan commit, atau bahkan menghapus suatu commit.