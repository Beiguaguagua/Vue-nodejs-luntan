-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: luntan_api
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `luntan_article`
--

DROP TABLE IF EXISTS `luntan_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `luntan_article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `arti_title` varchar(255) NOT NULL,
  `tags` json DEFAULT NULL,
  `author` varchar(255) NOT NULL,
  `Yes` int NOT NULL,
  `No` int NOT NULL,
  `watchers` int NOT NULL,
  `author_level` varchar(255) NOT NULL,
  `Date` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `luntan_article`
--

LOCK TABLES `luntan_article` WRITE;
/*!40000 ALTER TABLE `luntan_article` DISABLE KEYS */;
INSERT INTO `luntan_article` VALUES (18,'这是我的第一篇测试成功后的文章发表(目前没有图片和视频添加功能)','[\"测试4\"]','2',0,0,0,'1','','<p><strong>富文本编辑器搞了好久</strong></p>\n<p><strong>加上接口有些问题,这个也做了好久,人都要麻了</strong></p>'),(19,'测试2','[\"测试1\", \"测试2\", \"测试3\"]','2',0,0,0,'1','','<p>测试3</p>'),(20,'321','[\"测试1\", \"测试2\", \"测试3\"]','2',0,0,0,'1','','<p><strong>1234567</strong></p>'),(21,'测试是否有发布日期','[\"测试1\"]','2',0,0,0,'1','','<p>发布日期</p>'),(22,'123',NULL,'2',0,0,0,'1','','<p>321</p>'),(23,'321',NULL,'2',0,0,0,'1','2023-01-14','<p>123321</p>'),(24,'测试富文本的api-key','[\"测试1\", \"测试2\", \"测试3\"]','1',0,0,0,'1','2023-03-09','<p><em><strong>测试TINYMCE的api-key</strong></em></p>');
/*!40000 ALTER TABLE `luntan_article` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-19 14:17:28
