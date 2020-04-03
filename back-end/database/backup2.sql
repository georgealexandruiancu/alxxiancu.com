-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: alxxiancu_db
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'alxxiancu','d132e5810972ec4f9e8f7d24513d51cf7b1221aa'),(2,'alxxiancu','d132e5810972ec4f9e8f7d24513d51cf7b1221aa');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (2,'http://localhost:3001/uploads/alxxiancu-1585854781944.jpg','asd','<p>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</p>','asd','asd','asd'),(3,'http://localhost:3001/uploads/alxxiancu-1585854781944.jpg','asdasdasdasdasd','<p>asdasdasdasdasd</p>','asdasdasdasdasd','asdasdasdasdasd','asdasdasdasd'),(5,'http://localhost:3001/uploads/alxxiancu-1585854781944.jpg','asdasdasd','<p>asdasdasdasd</p>','asdasdasdasdasd','asdasdasdasdasd','asdasdasd'),(6,'http://localhost:3001/uploads/alxxiancu-1585854781944.jpg','asdasdasd','<p>sdasdasd</p>','asdasd','asdasd','asdasdasd');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `mails`
--

LOCK TABLES `mails` WRITE;
/*!40000 ALTER TABLE `mails` DISABLE KEYS */;
/*!40000 ALTER TABLE `mails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `personal_cv`
--

LOCK TABLES `personal_cv` WRITE;
/*!40000 ALTER TABLE `personal_cv` DISABLE KEYS */;
INSERT INTO `personal_cv` VALUES (1,'http://localhost:3001/uploads/alxxiancu-1585675165949.jpg','My CV HERE');
/*!40000 ALTER TABLE `personal_cv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `personal_education`
--

LOCK TABLES `personal_education` WRITE;
/*!40000 ALTER TABLE `personal_education` DISABLE KEYS */;
INSERT INTO `personal_education` VALUES (4,'09/2019','Present','GABRIELS GTS TECHNOLOGY RO SRL','Front-End Developer'),(5,'03/2018','Present','MITELSOFT R&D SRL','Assistant Programmer'),(6,'01/2017','09/2018','KRON EDU SRL','Front-End Developer'),(7,'10/2016','09/2018','Academia de informatica Brasov','Volunteer Teacher'),(8,'03/2017','04/2018','KRON EDU SRL','Co-Founder project BrasoWWW'),(9,'10/2016','01/2017','AIESC Romania','Volunteer Sales'),(13,'2016','Present','Faculty of Electrical Engineering and Computer Science','Specialization: Computers'),(14,'2012','2016','National Collage Zinca Golescu - Pitesti','Specialization: Computer & Informatics - intensive');
/*!40000 ALTER TABLE `personal_education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `personal_information`
--

LOCK TABLES `personal_information` WRITE;
/*!40000 ALTER TABLE `personal_information` DISABLE KEYS */;
INSERT INTO `personal_information` VALUES (1,'Heya! My name is Iancu George-Alexandru. I am a student in the beautiful city of Brasov at the Faculty of Engineering and Computer Science. Since 2017, together with Stan Georgian and the GI Junior Trainings team, we have set up the BrasoWWW project. Good luck .. I was a lecturer at the Brasov Academy of Informatics where we teach young people to discover their talent and passion for the IT sphere. I worked at KronEdu as a developer and I was delighted to be part of a beautiful and energetic team. In the present I work at GTS as a Front-end Developer. ','http://localhost:3001/uploads/alxxiancu-1585675165949.jpg','Brasov, Romania');
/*!40000 ALTER TABLE `personal_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `personal_languages`
--

LOCK TABLES `personal_languages` WRITE;
/*!40000 ALTER TABLE `personal_languages` DISABLE KEYS */;
INSERT INTO `personal_languages` VALUES (5,'HTML5 & SCSS'),(6,'JAVASCRIPT'),(7,'REACT.JS'),(8,'REACT NATIVE'),(9,'NODE.JS'),(10,'C/C++'),(11,'PHOTOSHOP'),(12,'ABODE XD'),(13,'LIGHTROOM CC'),(14,'PHP & MYSQL'),(15,'FIREBASE'),(16,'PYTHON');
/*!40000 ALTER TABLE `personal_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (5,'http://localhost:3001/uploads/alxxiancu-1585854781944.jpg','- React Native application -','Brasov Bus'),(6,'http://localhost:3001/uploads/alxxiancu-1585854808534.jpg','- ReactJS and React Native app with firebase database -','Descopera Delta Dunarii'),(8,'http://localhost:3001/uploads/alxxiancu-1585854844331.jpg','- PHP & MySQL website -','Patrimoniu Brasov'),(12,'http://localhost:3001/uploads/alxxiancu-1585854820216.jpg','- PHP & MySQL website - ','Manastirea Sinca Veche'),(13,'http://localhost:3001/uploads/alxxiancu-1585854814606.jpg','- Website and React Native Application - ','Happy Hour'),(14,'http://localhost:3001/uploads/alxxiancu-1585854802718.png','- ReactJS website - ','Academia de informatica Brasov'),(15,'http://localhost:3001/uploads/alxxiancu-1585855270801.jpg','- Website, branding and design -','PSYRISE'),(16,'http://localhost:3001/uploads/alxxiancu-1585854830064.jpg','- PHP & MySQL CMS - ','Iancu Dashboard'),(17,'http://localhost:3001/uploads/alxxiancu-1585855517465.png','- Personal photography project -','MoonVibes');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `storage`
--

LOCK TABLES `storage` WRITE;
/*!40000 ALTER TABLE `storage` DISABLE KEYS */;
INSERT INTO `storage` VALUES (5,'/uploads/alxxiancu-1585854781944.jpg','../front-end/public/uploads/alxxiancu-1585854781944.jpg'),(6,'/uploads/alxxiancu-1585854798172.jpg','../front-end/public/uploads/alxxiancu-1585854798172.jpg'),(7,'/uploads/alxxiancu-1585854802718.png','../front-end/public/uploads/alxxiancu-1585854802718.png'),(8,'/uploads/alxxiancu-1585854808534.jpg','../front-end/public/uploads/alxxiancu-1585854808534.jpg'),(9,'/uploads/alxxiancu-1585854814606.jpg','../front-end/public/uploads/alxxiancu-1585854814606.jpg'),(10,'/uploads/alxxiancu-1585854820216.jpg','../front-end/public/uploads/alxxiancu-1585854820216.jpg'),(11,'/uploads/alxxiancu-1585854830064.jpg','../front-end/public/uploads/alxxiancu-1585854830064.jpg'),(12,'/uploads/alxxiancu-1585854844331.jpg','../front-end/public/uploads/alxxiancu-1585854844331.jpg'),(13,'/uploads/alxxiancu-1585855270801.jpg','../front-end/public/uploads/alxxiancu-1585855270801.jpg'),(14,'/uploads/alxxiancu-1585855517465.png','../front-end/public/uploads/alxxiancu-1585855517465.png');
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

-- Dump completed on 2020-04-03 18:51:19
