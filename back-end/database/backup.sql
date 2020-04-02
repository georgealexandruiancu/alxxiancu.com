CREATE DATABASE  IF NOT EXISTS `alxxiancu_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `alxxiancu_db`;
-- MySQL dump 10.16  Distrib 10.1.39-MariaDB, for osx10.10 (x86_64)
--
-- Host: localhost    Database: alxxiancu_db
-- ------------------------------------------------------
-- Server version	10.1.39-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo` varchar(500) DEFAULT NULL,
  `short_description` varchar(200) DEFAULT NULL,
  `body` longtext,
  `title` varchar(150) DEFAULT NULL,
  `path` varchar(200) DEFAULT NULL,
  `tags` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (1,'http://localhost:3001/uploads/alxxiancu-1585675173611.jpg','Test New','<p>test New</p>','Test New ','test-new-','Test New');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mails`
--

DROP TABLE IF EXISTS `mails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(100) DEFAULT NULL,
  `sender` varchar(200) DEFAULT NULL,
  `subject` varchar(200) DEFAULT NULL,
  `message` tinytext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mails`
--

LOCK TABLES `mails` WRITE;
/*!40000 ALTER TABLE `mails` DISABLE KEYS */;
/*!40000 ALTER TABLE `mails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_cv`
--

DROP TABLE IF EXISTS `personal_cv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_cv` (
  `id` int(11) DEFAULT '1',
  `file` varchar(500) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_cv`
--

LOCK TABLES `personal_cv` WRITE;
/*!40000 ALTER TABLE `personal_cv` DISABLE KEYS */;
INSERT INTO `personal_cv` VALUES (1,'http://localhost:3001/uploads/alxxiancu-1585675165949.jpg','My CV HERE');
/*!40000 ALTER TABLE `personal_cv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_education`
--

DROP TABLE IF EXISTS `personal_education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_education` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_start` varchar(100) DEFAULT NULL,
  `date_end` varchar(100) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `position` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_education`
--

LOCK TABLES `personal_education` WRITE;
/*!40000 ALTER TABLE `personal_education` DISABLE KEYS */;
INSERT INTO `personal_education` VALUES (4,'09/2019','Present','GABRIELS GTS TECHNOLOGY RO SRL','Front-End Developer'),(5,'03/2018','Present','MITELSOFT R&D SRL','Assistant Programmer'),(6,'01/2017','09/2018','KRON EDU SRL','Front-End Developer'),(7,'10/2016','09/2018','Academia de informatica Brasov','Volunteer Teacher'),(8,'03/2017','04/2018','KRON EDU SRL','Co-Founder project BrasoWWW'),(9,'10/2016','01/2017','AIESC Romania','Volunteer Sales'),(13,'2016','Present','Faculty of Electrical Engineering and Computer Science','Specialization: Computers'),(14,'2012','2016','National Collage Zinca Golescu - Pitesti','Specialization: Computer & Informatics - intensive');
/*!40000 ALTER TABLE `personal_education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_information`
--

DROP TABLE IF EXISTS `personal_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_information` (
  `id` int(11) DEFAULT '1',
  `description` longtext,
  `profile_image` varchar(500) DEFAULT NULL,
  `location` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_information`
--

LOCK TABLES `personal_information` WRITE;
/*!40000 ALTER TABLE `personal_information` DISABLE KEYS */;
INSERT INTO `personal_information` VALUES (1,'Heya! My name is Iancu George-Alexandru. I am a student in the beautiful city of Brasov at the Faculty of Engineering and Computer Science. Since 2017, together with Stan Georgian and the GI Junior Trainings team, we have set up the BrasoWWW project. Good luck .. I was a lecturer at the Brasov Academy of Informatics where we teach young people to discover their talent and passion for the IT sphere. I worked at KronEdu as a developer and I was delighted to be part of a beautiful and energetic team. In the present I work at GTS as a Front-end Developer. ','http://localhost:3001/uploads/alxxiancu-1585675165949.jpg','Brasov, Romania');
/*!40000 ALTER TABLE `personal_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_languages`
--

DROP TABLE IF EXISTS `personal_languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_languages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_languages`
--

LOCK TABLES `personal_languages` WRITE;
/*!40000 ALTER TABLE `personal_languages` DISABLE KEYS */;
INSERT INTO `personal_languages` VALUES (5,'HTML5 & SCSS'),(6,'JAVASCRIPT'),(7,'REACT.JS'),(8,'REACT NATIVE'),(9,'NODE.JS'),(10,'C/C++'),(11,'PHOTOSHOP'),(12,'ABODE XD'),(13,'LIGHTROOM CC'),(14,'PHP & MYSQL'),(15,'FIREBASE'),(16,'PYTHON');
/*!40000 ALTER TABLE `personal_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo` varchar(500) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (3,'http://localhost:3001/uploads/alxxiancu-1585698843354.jpg',NULL,'Brasov Bus'),(4,'http://localhost:3001/uploads/alxxiancu-1585699101236.jpg',NULL,'Descopera Delta Dunarii');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storage`
--

DROP TABLE IF EXISTS `storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `storage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(500) DEFAULT NULL,
  `path_absolute` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storage`
--

LOCK TABLES `storage` WRITE;
/*!40000 ALTER TABLE `storage` DISABLE KEYS */;
INSERT INTO `storage` VALUES (1,'/uploads/alxxiancu-1585675165949.jpg','../front-end/public/uploads/alxxiancu-1585675165949.jpg'),(2,'/uploads/alxxiancu-1585675173611.jpg','../front-end/public/uploads/alxxiancu-1585675173611.jpg'),(3,'/uploads/alxxiancu-1585698843354.jpg','../front-end/public/uploads/alxxiancu-1585698843354.jpg'),(4,'/uploads/alxxiancu-1585699101236.jpg','../front-end/public/uploads/alxxiancu-1585699101236.jpg');
/*!40000 ALTER TABLE `storage` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-02  8:09:59
