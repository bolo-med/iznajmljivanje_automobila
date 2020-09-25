CREATE DATABASE  IF NOT EXISTS `iznajmljivanje_automobila` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `iznajmljivanje_automobila`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: iznajmljivanje_automobila
-- ------------------------------------------------------
-- Server version	5.7.29-log

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
-- Table structure for table `automobili`
--

DROP TABLE IF EXISTS `automobili`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `automobili` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proizvodjac_id` int(11) NOT NULL,
  `model_id` int(11) NOT NULL,
  `godiste` int(11) NOT NULL,
  `motor` varchar(100) NOT NULL,
  `status_id` int(11) NOT NULL,
  `fotografija` varchar(300) NOT NULL,
  `cijena` double NOT NULL,
  `autom_mjenjac` tinyint(4) NOT NULL,
  `br_putnika` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `proizvodjac_id` (`proizvodjac_id`),
  KEY `model_id` (`model_id`),
  KEY `status_id` (`status_id`),
  CONSTRAINT `automobili_ibfk_1` FOREIGN KEY (`proizvodjac_id`) REFERENCES `proizvodjaci` (`id`),
  CONSTRAINT `automobili_ibfk_2` FOREIGN KEY (`model_id`) REFERENCES `modeli` (`id`),
  CONSTRAINT `automobili_ibfk_3` FOREIGN KEY (`status_id`) REFERENCES `statusi` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `automobili`
--

LOCK TABLES `automobili` WRITE;
/*!40000 ALTER TABLE `automobili` DISABLE KEYS */;
INSERT INTO `automobili` VALUES (21,7,14,2017,'Skyactiv-G',1,'1596824364542-mazda_6.jpg',60,0,5),(23,24,15,2017,'3.0 TFSI',1,'1596887406246-audi_a8_3.jpg',30,0,5),(24,24,15,2019,'3.0 TFSI',2,'1596887467680-audi_a8_2.jpg',30,0,5),(25,24,16,2018,'4.0 TFSI',2,'1596887539124-audi_q7.jpg',30,0,4),(26,25,17,2016,'M 276 DE',1,'1596887728604-mercedes_s-class_2.jpg',40,0,5),(27,25,18,2020,'M260',2,'1599590726707-mercedes_e_class.jpg',40,1,4),(28,26,19,2019,'4.0 N63',1,'1596887895317-bmw_i7.jpg',50,1,5),(29,26,19,2017,'4.2 N63',2,'1596887939015-bmw_i7s.jpg',50,1,5),(30,26,20,2018,'4.4 S63',3,'1596887995116-bmw_x5.jpg',50,0,4),(31,7,14,2019,'Skyactiv-X',3,'1596888052524-mazda_6.jpg',25,1,5),(32,28,21,2018,'2.0 TDI',3,'1596888125431-volkswagen_arteon.jpg',27,1,4),(33,28,21,2019,'2.0 TSI',3,'1596888173173-volkswagen_arteon_2.jpg',27,0,4),(34,5,22,2015,'3.0 TSI',1,'1596888241981-skoda_superb.jpg',19,0,5),(35,29,23,2019,'AC induction',2,'1599074278889-tesla_model_s.jpg',27,1,4),(43,7,24,2008,'benzinski',1,'1600949167130-mazda_rx_8.png',23,0,2);
/*!40000 ALTER TABLE `automobili` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `korisnici`
--

DROP TABLE IF EXISTS `korisnici`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `korisnici` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ime` varchar(50) NOT NULL,
  `prezime` varchar(50) NOT NULL,
  `god_rodj` int(11) NOT NULL,
  `adresa` varchar(100) NOT NULL,
  `telefon` varchar(50) NOT NULL,
  `username` varchar(100) NOT NULL,
  `hashed_password` text NOT NULL,
  `is_admin` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `korisnici`
--

LOCK TABLES `korisnici` WRITE;
/*!40000 ALTER TABLE `korisnici` DISABLE KEYS */;
INSERT INTO `korisnici` VALUES (9,'Aleksandar','Rakic',1992,'Neka ulica br. 123','+11111111111','Rocket','65dde25a25139bd3a899ad1f24bd921a3b04409acc72381780093d9545979c6f2102d5d73c8eeed050894ffac17230c40f42b366b713c1cee92272ffe6091daa',0),(10,'Savo','Lazic',1988,'Neka ulica br. 12','+22233222333','Hitman','65dde25a25139bd3a899ad1f24bd921a3b04409acc72381780093d9545979c6f2102d5d73c8eeed050894ffac17230c40f42b366b713c1cee92272ffe6091daa',0),(11,'Vaso','Bakocevic',1989,'Neka ulica br. 34','+56744333555','Psychopath','65dde25a25139bd3a899ad1f24bd921a3b04409acc72381780093d9545979c6f2102d5d73c8eeed050894ffac17230c40f42b366b713c1cee92272ffe6091daa',0),(12,'Aleksandar','Ilic',1989,'Neka ulica br. 45','+555667774443','Joker','65dde25a25139bd3a899ad1f24bd921a3b04409acc72381780093d9545979c6f2102d5d73c8eeed050894ffac17230c40f42b366b713c1cee92272ffe6091daa',0),(13,'Darko','Stosic',1992,'Neka ulica br. 56','+55544222789','Stole','65dde25a25139bd3a899ad1f24bd921a3b04409acc72381780093d9545979c6f2102d5d73c8eeed050894ffac17230c40f42b366b713c1cee92272ffe6091daa',0),(14,'Dusko','Todorovic',1994,'Neka ulica br. 67','+34566789554','Dusko','65dde25a25139bd3a899ad1f24bd921a3b04409acc72381780093d9545979c6f2102d5d73c8eeed050894ffac17230c40f42b366b713c1cee92272ffe6091daa',0),(15,'Admin','Admin',2000,'ul. Admin bb','+11111111111','Admin','65dde25a25139bd3a899ad1f24bd921a3b04409acc72381780093d9545979c6f2102d5d73c8eeed050894ffac17230c40f42b366b713c1cee92272ffe6091daa',1),(16,'Korisnik','Korisnik',2000,'ul. Korisnik bb','+11111111111','korisnik','65dde25a25139bd3a899ad1f24bd921a3b04409acc72381780093d9545979c6f2102d5d73c8eeed050894ffac17230c40f42b366b713c1cee92272ffe6091daa',0);
/*!40000 ALTER TABLE `korisnici` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modeli`
--

DROP TABLE IF EXISTS `modeli`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modeli` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `oznaka` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modeli`
--

LOCK TABLES `modeli` WRITE;
/*!40000 ALTER TABLE `modeli` DISABLE KEYS */;
INSERT INTO `modeli` VALUES (1,'Yugo 45'),(4,'101'),(5,'Logan'),(7,'3'),(8,'Vesta'),(13,'F40'),(14,'6'),(15,'A8'),(16,'Q7'),(17,'S-Class'),(18,'E-Class'),(19,'i7'),(20,'X5'),(21,'Arteon'),(22,'Superb'),(23,'Model S'),(24,'RX-8');
/*!40000 ALTER TABLE `modeli` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proizvodjaci`
--

DROP TABLE IF EXISTS `proizvodjaci`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proizvodjaci` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naziv` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proizvodjaci`
--

LOCK TABLES `proizvodjaci` WRITE;
/*!40000 ALTER TABLE `proizvodjaci` DISABLE KEYS */;
INSERT INTO `proizvodjaci` VALUES (1,'Zastava'),(2,'Dacia'),(5,'Škoda'),(7,'Mazda'),(9,'Lada'),(23,'Ferrari'),(24,'Audi'),(25,'Mercedes'),(26,'BMW'),(28,'Volkswagen'),(29,'Tesla'),(30,'Fiat');
/*!40000 ALTER TABLE `proizvodjaci` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rezervacije`
--

DROP TABLE IF EXISTS `rezervacije`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rezervacije` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `korisnik_id` int(11) NOT NULL,
  `automobil_id` int(11) NOT NULL,
  `datum_preuzimanja` date NOT NULL,
  `datum_vracanja` date NOT NULL,
  `realizovana` tinyint(1) DEFAULT NULL,
  `datum_stvarnog_vracanja` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `korisnik_id` (`korisnik_id`),
  KEY `automobil_id` (`automobil_id`),
  CONSTRAINT `rezervacije_ibfk_1` FOREIGN KEY (`korisnik_id`) REFERENCES `korisnici` (`id`),
  CONSTRAINT `rezervacije_ibfk_2` FOREIGN KEY (`automobil_id`) REFERENCES `automobili` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rezervacije`
--

LOCK TABLES `rezervacije` WRITE;
/*!40000 ALTER TABLE `rezervacije` DISABLE KEYS */;
INSERT INTO `rezervacije` VALUES (31,9,26,'2020-09-01','2020-09-05',1,'2020-09-05'),(32,9,30,'2020-09-05','2020-09-15',1,NULL),(33,10,31,'2020-09-03','2020-09-17',1,NULL),(34,10,24,'2020-09-03','2020-09-04',1,'2020-09-04'),(35,10,34,'2020-09-02','2020-09-02',1,'2020-09-03'),(36,11,28,'2020-09-04','2020-09-07',1,'2020-09-07'),(37,11,21,'2020-09-02','2020-09-05',1,'2020-09-05'),(39,12,34,'2020-09-03','2020-09-03',1,'2020-09-03'),(40,12,34,'2020-09-05','2020-09-05',0,NULL),(41,12,32,'2020-09-01','2020-09-08',1,'2020-09-07'),(43,14,33,'2020-08-25','2020-09-09',1,NULL),(46,10,28,'2020-09-08','2020-09-09',0,NULL),(47,10,21,'2020-09-07','2020-09-07',1,'2020-09-07'),(48,9,23,'2020-09-10','2020-09-10',0,NULL),(49,13,34,'2020-09-07','2020-09-08',0,NULL),(50,14,27,'2020-09-07','2020-09-08',1,'2020-09-09'),(51,14,29,'2020-09-11','2020-09-16',NULL,NULL),(52,12,30,'2019-07-11','2019-07-15',1,'2019-07-15'),(64,11,25,'2020-09-01','2020-09-27',NULL,NULL),(66,12,35,'2020-09-06','2020-09-15',NULL,NULL),(67,16,24,'2020-09-12','2020-09-14',NULL,NULL),(68,16,26,'2020-09-11','2020-09-11',0,NULL),(71,15,34,'2020-09-11','2020-09-11',1,'2020-09-12'),(72,16,32,'2020-09-12','2020-09-12',1,NULL),(73,9,27,'2020-09-14','2020-09-16',NULL,NULL),(74,15,23,'2020-09-12','2020-09-12',1,'2020-09-12');
/*!40000 ALTER TABLE `rezervacije` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statusi`
--

DROP TABLE IF EXISTS `statusi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `statusi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tip` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statusi`
--

LOCK TABLES `statusi` WRITE;
/*!40000 ALTER TABLE `statusi` DISABLE KEYS */;
INSERT INTO `statusi` VALUES (1,'slobodan'),(2,'rezervisan'),(3,'iznajmljen');
/*!40000 ALTER TABLE `statusi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-24 14:11:24
