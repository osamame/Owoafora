-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2022 at 05:41 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookkeeping`
--
CREATE DATABASE IF NOT EXISTS `bookkeeping` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bookkeeping`;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `Id` bigint(100) NOT NULL,
  `BookTitle` varchar(100) DEFAULT NULL,
  `Author` varchar(100) DEFAULT NULL,
  `TotalPages` int(50) DEFAULT NULL,
  `ISBN` varchar(100) DEFAULT NULL,
  `Publisher` varchar(100) DEFAULT NULL,
  `ReleaseDate` date NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `IsDeleted` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`Id`, `BookTitle`, `Author`, `TotalPages`, `ISBN`, `Publisher`, `ReleaseDate`, `DateCreated`, `IsDeleted`) VALUES
(1, 'Zenith Principle', 'Micheal', 300, 'ISBN38997874', 'Tosin', '2022-06-02', '2022-07-04 15:21:30', 1),
(3, 'Good Bosses', 'Micheal', 300, 'ISBN38597874', 'Tosin', '2022-06-02', '2022-07-04 15:21:38', 0),
(14, 'Solution Minded', 'Samuel', 70, 'ISBN38997879', 'Kell', '2022-06-30', '2022-07-04 15:22:12', 1);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `Id` bigint(100) NOT NULL,
  `BookId` varchar(100) DEFAULT NULL,
  `Comments` varchar(500) DEFAULT NULL,
  `CommentedBy` varchar(200) DEFAULT NULL,
  `IPAddress` varchar(50) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`Id`, `BookId`, `Comments`, `CommentedBy`, `IPAddress`, `DateCreated`) VALUES
(5, '1', 'Nice books', 'Osas', '10.20.50.189', '2022-07-04 11:39:04'),
(9, '1', 'Nice books', 'Osamame', '::1', '2022-07-04 12:03:40'),
(15, '14', 'Very Insightful', 'Wale', '::1', '2022-07-04 15:22:41');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `mobile` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `mobile`, `email`, `password`, `created_at`) VALUES
(1, 'Williams Osareten', '070332418', 'tyler71wills@outlook.com', '', '2022-07-01'),
(2, 'Williams Osareten', '070332418', 'tyler71wills@outlook.com', '', '2022-07-01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Id` (`Id`),
  ADD KEY `Id_2` (`Id`),
  ADD KEY `Id_3` (`Id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `Id` bigint(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `Id` bigint(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
