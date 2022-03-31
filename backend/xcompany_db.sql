-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost:3307
-- Üretim Zamanı: 31 Mar 2022, 06:10:03
-- Sunucu sürümü: 10.4.22-MariaDB
-- PHP Sürümü: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `xcompany_db`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `consumables`
--

CREATE TABLE `consumables` (
  `id` int(11) NOT NULL,
  `number` varchar(50) COLLATE utf8_turkish_ci NOT NULL,
  `supplier` varchar(50) COLLATE utf8_turkish_ci NOT NULL,
  `weight` float NOT NULL,
  `status` tinyint(1) NOT NULL,
  `save_date` date NOT NULL,
  `update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `consumables`
--

INSERT INTO `consumables` (`id`, `number`, `supplier`, `weight`, `status`, `save_date`, `update_date`) VALUES
(1, '001', 'A Tedarikçi', 10.567, 1, '2022-03-27', '2022-03-27'),
(2, '002', 'B Tedarikçi', 20.344, 0, '2022-03-27', '2022-03-27'),
(3, '003', 'C Tedarikçi', 30, 1, '2022-03-27', '2022-03-31'),
(4, '004', 'F Tedarikçi', 677, 0, '2022-03-31', '2022-03-31'),
(6, '005', 'K Tedarikçi', 4567, 1, '2022-03-31', '2022-03-31'),
(7, '007', 'M Tedarikçi', 56, 1, '2022-03-31', '2022-03-31');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `consumables`
--
ALTER TABLE `consumables`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `consumables`
--
ALTER TABLE `consumables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
