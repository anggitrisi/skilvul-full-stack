

--
-- Database: `skilvul_music_player`
--
CREATE DATABASE skilvul_music_streaming

USE skilvul_music_streaming;


-- --------------------------------------------------------

--
-- Table structure for table `singers`
--

CREATE TABLE `singers` (
  `singer_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
) 


-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `email` varchar(255) DEFAULT NULL UNIQUE,
  `password` text DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) 


-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `album_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `singer_id` int(11) NOT NULL,
  CONSTRAINT `fk_albums_singers_singer_id` FOREIGN KEY (`singer_id`) REFERENCES `singers` (`singer_id`)
) 


-- --------------------------------------------------------

--
-- Table structure for table `playlist`
--

CREATE TABLE `playlist` (
  `playlist_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  CONSTRAINT `fk_playlist_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
);


-- --------------------------------------------------------

--
-- Table structure for table `tracks`
--

CREATE TABLE `tracks` (
  `track_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `album_id` int(11) NOT NULL,
  `singer_id` int(11) NOT NULL,
  CONSTRAINT `fk_tracks_albums_album_id` FOREIGN KEY (`album_id`) REFERENCES `albums` (`album_id`),
  CONSTRAINT `fk_tracks_singers_singer_id` FOREIGN KEY (`singer_id`) REFERENCES `singers` (`singer_id`)
) ;


-- --------------------------------------------------------

--
-- Table structure for table `playlist_tracks`
--

CREATE TABLE `playlist_tracks` (
  `playlist_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `track_id` int(11) NOT NULL,
  CONSTRAINT `fk_playlist_tracks_playlist_playlist_id` FOREIGN KEY (`playlist_id`) REFERENCES `playlist` (`playlist_id`),
  CONSTRAINT `fk_playlist_tracks_tracks_track_id` FOREIGN KEY (`track_id`) REFERENCES `tracks` (`track_id`)
);










