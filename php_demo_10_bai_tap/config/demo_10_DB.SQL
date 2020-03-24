DROP DATABASE IF EXISTS demo_10_technology;
CREATE DATABASE `demo_10_technology` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
use demo_10_technology;
CREATE TABLE IF NOT EXISTS `category` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(255) UNIQUE NOT NULL,
	`parent_id` int DEFAULT '0',
	`status` tinyint DEFAULT '0'
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `product` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`image` VARCHAR(255) NOT NULL,
	`image_list` text NULL,
	`price` float NOT NULL DEFAULT '0',
	`price_sale` float NOT NULL DEFAULT '0',
	`status` tinyint DEFAULT '0',
	`details` text NULL,
	`category_id` int NOT NULL,
	`created_date` timestamp DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `customer` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`email` VARCHAR(100) NOT NULL,
	`phone` VARCHAR(11) NOT NULL,
	`address` VARCHAR(200) NOT NULL
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `order` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`created_date` date DEFAULT NOW(),
	`customer_id` int NOT NULL,
	`status` tinyint DEFAULT '0',
	FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `order_details` (
	`order_id` INT  NOT NULL,
	`product_id` INT NOT NULL,
	PRIMARY KEY (`order_id`,`product_id`),
	`quantity` int DEFAULT '1',
	`price` float,
	FOREIGN KEY (`order_id`) REFERENCES `order` (`id`),
	FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `banner` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`image` VARCHAR(255) NULL
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `admin` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`password` VARCHAR(11) NOT NULL,
	`email` VARCHAR(50) NOT NULL UNIQUE,
	`phone` VARCHAR(11) UNIQUE NOT NULL,
	`image` VARCHAR(255) NULL
) ENGINE = InnoDB;
