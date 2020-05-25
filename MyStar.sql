-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2020 at 02:15 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mystar`
--

-- --------------------------------------------------------

--
-- Table structure for table `authorizedusers`
--

CREATE TABLE `authorizedusers` (
                                   `userName` varchar(255) NOT NULL,
                                   `password` varchar(255) NOT NULL,
                                   `CUST_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `authorizedusers`
--

INSERT INTO `authorizedusers` (`userName`, `password`, `CUST_ID`) VALUES
('jacob96', 'securepass123', 1),
('grabinow2', 'joshblockisthebest', 2),
('sgorlin', 'password', 3),
('corona', 'saveme', 4),
('elonmusk', 'weareinavirtualworld', 5),
('dtrump', 'MAGA2020', 6);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
                            `CUST_ID` int(11) NOT NULL,
                            `F_NAME` varchar(20) NOT NULL,
                            `L_NAME` varchar(20) NOT NULL,
                            `DT_JOINED` date NOT NULL,
                            `EMAIL` varchar(64) NOT NULL,
                            `PAYMENT_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `emaillist`
--

CREATE TABLE `emaillist` (
                             `email` varchar(255) NOT NULL,
                             `first name` varchar(255) NOT NULL,
                             `last name` varchar(255) NOT NULL,
                             `receive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `emaillist`
--

INSERT INTO `emaillist` (`email`, `first name`, `last name`, `receive`) VALUES
('Jacobburstyn@gmail.com', 'Jacob', 'Burstyn', 1),
('', '', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `payment_info`
--

CREATE TABLE `payment_info` (
                                `PAYMENT_ID` int(11) NOT NULL,
                                `payment_type_ID` int(11) NOT NULL,
                                `NAME_ON_CARD` varchar(40) NOT NULL,
                                `CC_NUM` varchar(19) NOT NULL,
                                `EXP_DT` varchar(5) NOT NULL,
                                `CCV` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payment_types`
--

CREATE TABLE `payment_types` (
                                 `payment_type_ID` int(11) NOT NULL,
                                 `payment_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment_types`
--

INSERT INTO `payment_types` (`payment_type_ID`, `payment_type`) VALUES
(1, 'Visa'),
(2, 'MasterCard'),
(3, 'Discover'),
(4, 'American Express');

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
                            `PURCHASE_ID` int(11) NOT NULL,
                            `CUST_ID` int(11) NOT NULL,
                            `STAR_ID` int(11) NOT NULL,
                            `PURCHASE_DT` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `selling_regions`
--

CREATE TABLE `selling_regions` (
                                   `Selling_region_ID` int(11) NOT NULL,
                                   `REGION` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `selling_regions`
--

INSERT INTO `selling_regions` (`Selling_region_ID`, `REGION`) VALUES
(1, 'United States'),
(2, 'Canada'),
(5, 'United Kingdom'),
(6, 'Mexico'),
(7, 'Germany'),
(8, 'France'),
(9, 'Italy'),
(10, 'China');

-- --------------------------------------------------------

--
-- Table structure for table `star`
--

CREATE TABLE `star` (
                        `STAR_ID` int(11) NOT NULL,
                        `NAME` varchar(30) NOT NULL,
                        `DT_UPLOADED` date NOT NULL,
                        `PRICE` decimal(10,0) NOT NULL,
                        `DESCRIPTION` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
    ADD PRIMARY KEY (`CUST_ID`);

--
-- Indexes for table `payment_info`
--
ALTER TABLE `payment_info`
    ADD PRIMARY KEY (`PAYMENT_ID`);

--
-- Indexes for table `payment_types`
--
ALTER TABLE `payment_types`
    ADD PRIMARY KEY (`payment_type_ID`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
    ADD PRIMARY KEY (`PURCHASE_ID`);

--
-- Indexes for table `selling_regions`
--
ALTER TABLE `selling_regions`
    ADD PRIMARY KEY (`Selling_region_ID`);

--
-- Indexes for table `star`
--
ALTER TABLE `star`
    ADD PRIMARY KEY (`STAR_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
    MODIFY `CUST_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_info`
--
ALTER TABLE `payment_info`
    MODIFY `PAYMENT_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_types`
--
ALTER TABLE `payment_types`
    MODIFY `payment_type_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `purchase`
--
ALTER TABLE `purchase`
    MODIFY `PURCHASE_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `selling_regions`
--
ALTER TABLE `selling_regions`
    MODIFY `Selling_region_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `star`
--
ALTER TABLE `star`
    MODIFY `STAR_ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;