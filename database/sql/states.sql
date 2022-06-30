/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `states` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('1','0') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `states` (`id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Gujarat', 'gujarat', '1', '2022-06-23 02:25:17', '2022-06-23 02:25:17');
INSERT INTO `states` (`id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(2, 'telangana', 'telangana', '1', '2022-06-23 02:25:54', '2022-06-23 02:25:54');
INSERT INTO `states` (`id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(3, 'null', 'null', '1', '2022-06-23 02:25:59', '2022-06-23 02:25:59'),
(4, 'andhra pradesh', 'andhra-pradesh', '1', '2022-06-23 02:26:16', '2022-06-23 02:26:16'),
(5, 'assam', 'assam', '1', '2022-06-23 02:28:20', '2022-06-23 02:28:20'),
(6, 'bihar', 'bihar', '1', '2022-06-23 02:28:52', '2022-06-23 02:28:52'),
(7, 'chattisgarh', 'chattisgarh', '1', '2022-06-23 02:30:03', '2022-06-23 02:30:03'),
(8, 'delhi', 'delhi', '1', '2022-06-23 02:30:35', '2022-06-23 02:30:35'),
(9, 'daman & diu', 'daman-diu', '1', '2022-06-23 02:31:17', '2022-06-23 02:31:17'),
(10, 'dadra & nagar haveli', 'dadra-nagar-haveli', '1', '2022-06-23 02:31:58', '2022-06-23 02:31:58'),
(11, 'haryana', 'haryana', '1', '2022-06-23 02:31:59', '2022-06-23 02:31:59'),
(12, 'himachal pradesh', 'himachal-pradesh', '1', '2022-06-23 02:32:16', '2022-06-23 02:32:16'),
(13, 'jammu & kashmir', 'jammu-kashmir', '1', '2022-06-23 02:32:55', '2022-06-23 02:32:55'),
(14, 'jharkhand', 'jharkhand', '1', '2022-06-23 02:33:07', '2022-06-23 02:33:07'),
(15, 'karnataka', 'karnataka', '1', '2022-06-23 02:33:52', '2022-06-23 02:33:52'),
(16, 'kerala', 'kerala', '1', '2022-06-23 02:35:29', '2022-06-23 02:35:29'),
(17, 'lakshadweep', 'lakshadweep', '1', '2022-06-23 02:36:08', '2022-06-23 02:36:08'),
(18, 'madhya pradesh', 'madhya-pradesh', '1', '2022-06-23 02:36:24', '2022-06-23 02:36:24'),
(19, 'maharashtra', 'maharashtra', '1', '2022-06-23 02:38:35', '2022-06-23 02:38:35'),
(20, 'goa', 'goa', '1', '2022-06-23 02:39:10', '2022-06-23 02:39:10'),
(21, 'manipur', 'manipur', '1', '2022-06-23 02:41:14', '2022-06-23 02:41:14'),
(22, 'mizoram', 'mizoram', '1', '2022-06-23 02:41:21', '2022-06-23 02:41:21'),
(23, 'nagaland', 'nagaland', '1', '2022-06-23 02:41:25', '2022-06-23 02:41:25'),
(24, 'tripura', 'tripura', '1', '2022-06-23 02:41:28', '2022-06-23 02:41:28'),
(25, 'arunachal pradesh', 'arunachal-pradesh', '1', '2022-06-23 02:41:31', '2022-06-23 02:41:31'),
(26, 'meghalaya', 'meghalaya', '1', '2022-06-23 02:41:53', '2022-06-23 02:41:53'),
(27, 'odisha', 'odisha', '1', '2022-06-23 02:41:58', '2022-06-23 02:41:58'),
(28, 'chandigarh', 'chandigarh', '1', '2022-06-23 02:43:36', '2022-06-23 02:43:36'),
(29, 'punjab', 'punjab', '1', '2022-06-23 02:43:36', '2022-06-23 02:43:36'),
(30, 'rajasthan', 'rajasthan', '1', '2022-06-23 02:44:43', '2022-06-23 02:44:43'),
(31, 'tamil nadu', 'tamil-nadu', '1', '2022-06-23 02:47:40', '2022-06-23 02:47:40'),
(32, 'pondicherry', 'pondicherry', '1', '2022-06-23 02:49:37', '2022-06-23 02:49:37'),
(33, 'uttar pradesh', 'uttar-pradesh', '1', '2022-06-23 02:50:14', '2022-06-23 02:50:14'),
(34, 'uttarakhand', 'uttarakhand', '1', '2022-06-23 02:54:38', '2022-06-23 02:54:38'),
(35, 'west bengal', 'west-bengal', '1', '2022-06-23 02:55:19', '2022-06-23 02:55:19'),
(36, 'andaman & nicobar islands', 'andaman-nicobar-islands', '1', '2022-06-23 02:56:03', '2022-06-23 02:56:03'),
(37, 'sikkim', 'sikkim', '1', '2022-06-23 02:56:36', '2022-06-23 02:56:36');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;