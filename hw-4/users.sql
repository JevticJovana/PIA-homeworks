-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 31, 2021 at 06:43 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `listmovies`
--

DROP TABLE IF EXISTS `listmovies`;
CREATE TABLE IF NOT EXISTS `listmovies` (
  `Movie_title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Movie_description` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Movie_genre` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Movie_screenwriter` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Movie_director` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Movie_studio` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Movie_actors` json NOT NULL,
  `Movie_year` int(4) NOT NULL,
  `Movie_length` int(3) NOT NULL,
  `Movie_id` int(4) NOT NULL AUTO_INCREMENT,
  `Movie_poster` varchar(255) NOT NULL,
  `Movie_grade` int(4) DEFAULT NULL,
  `Grade_counter` int(4) DEFAULT NULL,
  UNIQUE KEY `Movie_id` (`Movie_id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `listmovies`
--

INSERT INTO `listmovies` (`Movie_title`, `Movie_description`, `Movie_genre`, `Movie_screenwriter`, `Movie_director`, `Movie_studio`, `Movie_actors`, `Movie_year`, `Movie_length`, `Movie_id`, `Movie_poster`, `Movie_grade`, `Grade_counter`) VALUES
('500 Days of Summer', 'Neobična romantična komedija o ženi koja ne veruje da prava ljubav postoji i mladiću koji se zaljubljuje u nju i pokušava da je osvoji', 'Romantika, komedija', 'Skot Njustater, Majkl H. Viber', 'Mark Veb', 'Fox Searchlight Pictures', '{\"glumac1\": \"Džozef Gordon-Levit\", \"glumac2\": \"Zoi Dešanel\", \"glumac3\": \"Džefri Erend\", \"glumac4\": \"Kloi Grejs Morec\", \"glumac5\": \"Metju Grej Gabler\", \"glumac6\": \"Klark Greg\"}', 2009, 95, 31, 'images/500dos.jpg', NULL, NULL),
('Inception', 'Lopov koji krade korporativne tajne pomoću tehnike \'deljenja snova\' je dobio zadatak da izvrši usađivanje inverzne ideje od prvobitne u um direktora kompanije', 'Akcioni, sci-fi, avanturistički', 'Kristofer Nolan', 'Kristofer Nolan', 'Warner Bros. Pictures', '{\"glumac1\": \"Leonardo Dikapraio\", \"glumac2\": \"Ken Vatanabe\", \"glumac3\": \"Džozef Gordon-Levit\", \"glumac4\": \"Tom Hardi\", \"glumac5\": \"Elen Pejdž\", \"glumac6\": \"Marion Kotijar\", \"glumac7\": \"Kilijan Marfi\"}', 2010, 148, 10, 'images/inception.jpg', 19, 4),
('Shrek 2', 'Šrek i Fiona putuju do kraljevstva radi proslave svog braka. Kada stignu, shvataju da baš i nisu toliko dobrodošli kao što su mislili', 'Animirani, fantazija', 'Endru Adamson', 'Aron Vorner, Dejvid Lipman', 'DreamWorks Picture', '{\"glumac1\": \"Majkl Majers\", \"glumac2\": \"Edi Marfi\", \"glumac3\": \"Kameron Dijaz\", \"glumac4\": \"Džuli Endruz\"}', 2004, 92, 4, 'images/shrek2.jpg', 26, 7),
('Eyes Wide Shut', 'Nakon što mu žena otkrije bolnu tajnu, njujorški doktor kreće u mučno iskustvo dugonoćnih seksualnih i moralnih otkrića', 'Drama, triler', 'Stenli Kjubrik, Fredrih Rafael', 'Stenli Kjubrik', 'Warner Bros.', '{\"glumac1\": \"Tom Kruz\", \"glumac2\": \"Nikol Kidman\", \"glumac3\": \"Sidni Polak\", \"glumac4\": \"Mari Ricardson\", \"glumac5\": \"Tom Fild\"}', 1999, 159, 16, 'images/eyeswideshut.jpg', 6, 2),
('We\'re the Millers', 'Diler stvara lažnu porodicu kao deo svog plana da prenese ogromne količine marihuane u SAD iz Meksika', 'Komedija, krimi', 'Bob Fišer, Šon Anders, Stiv Fejber', 'Roson Maršal Terber', 'Warner Bros.', '{\"glumac1\": \"Džejson Sudejkis\", \"glumac2\": \"Dženifer Aniston\", \"glumac3\": \"Ema Roberts\", \"glumac4\": \"Vil Polter\", \"glumac5\": \"Nik Oferman\"}', 2013, 110, 9, 'images/millers.jpg', 15, 5),
('1917', '6.04.1917., dva vojnika kreću u trku sa vremenom da bi dostavili poruku koja će sprečiti 1600 ljudi od upadanja u smrtonosnu zamku', 'Drama, ratni', 'Sem Mendiz, Kristi Vilson-Kajrns', 'Sem Mendiz, Pipa Haris, Brajan Oliver', 'Universal Pictures', '{\"glumac1\": \"Džordž Makaj\", \"glumac2\": \"Din-Čarls Čapmen\", \"glumac3\": \"Mark Strong\", \"glumac4\": \"Endru Skot\", \"glumac5\": \"Ričard Maden\", \"glumac6\": \"Benedikt Kamberbač\"}', 2019, 119, 7, 'images/1917.jpg', NULL, NULL),
('Star Wars: Episode III - Revenge of the Sith', '3 godine nakon Ratova Klonova, Džedaji spašavaju Palpatina od Dooku-a. Dok se Obi-Wan suočava sa novom pretnjom, Anakin se ponaša kao dupli agent između Džedajskog Saveta i Palpatina i biva uvučen u pokvareni plan vladavine Galaksijom', 'Naučna fantastika, akcija', 'Džordž Lukas', 'Džordž Lukas', 'Lucasfilm', '{\"glumac1\": \"Juan Makgregor\", \"glumac2\": \"Natali Portman\", \"glumac3\": \"Hejden Kristensen\", \"glumac4\": \"Ijan Makdermid\", \"glumac5\": \"Semjuel L. Džekson\", \"glumac6\": \"Frenk Oz\"}', 2005, 140, 12, 'images/sw3.jpg', NULL, NULL),
('The Dark Knight', 'Kada pretnja zvana Joker donese pravu pustoš i haos među građane Gothama, Betmen mora prihvatiti jedan od najvećih psiholoških i psihičkih testova svojih mogućnosti u borbi protiv nepravde', 'Akcija, krimi, drama', 'Kristofer Nolan, Džonatan Nolan', 'Kristofer Nolan', 'DC Comics', '{\"glumac1\": \"Kristijan Bejl\", \"glumac2\": \"Majkl Kejn\", \"glumac3\": \"Hit Ledžer\", \"glumac4\": \"Gari Oldman\", \"glumac5\": \"Morgan Friman\", \"glumac6\": \"Aron Ekhart\"}', 2008, 152, 17, 'images/darkknight.jpg', NULL, NULL),
('Joker', 'U gradu Gotham, mentalno oboleo komedijaš Artur Flek je zanemaren i maltretiran od strane društva. Upušta se u silaznu putanju revolucije i krvavih zločina, što ga dovodi do suočavanja sa svojim alter-egom: Džokerom', 'Krimi, drama, triler', 'Tod Filips, Skot Silver', 'Tod Filips', 'DC Films', '{\"glumac1\": \"Hoakin Finiks\", \"glumac2\": \"Robert de Niro\", \"glumac3\": \"Zazi Bic\", \"glumac4\": \"Franses Konroj\", \"glumac5\": \"Bret Kalen\", \"glumac6\": \"Bil Kamp\"}', 2019, 122, 18, 'images/joker.jpg', NULL, NULL),
('Iron Man', 'Nakon što je bio zatvoren u avganistanskom zatvoru, milijarder, po profesiji inženjer, Toni Stark stvara jedinstveni, oružani oklop za borbu protiv zla', 'Akcija, avanturistički, sci-fi', 'Sten Li, Mark Fergus', 'Dzon Favro', 'Marvel', '{\"glumac1\": \"Robert Dauni Džunior\", \"glumac2\": \"Terens Hauard\", \"glumac3\": \"Džef Bridžiz\", \"glumac4\": \"Šon Tub\", \"glumac5\": \"Gvinet Paltrou\", \"glumac6\": \"Lesli Bib\"}', 2008, 126, 19, 'images/ironman.jpg', NULL, NULL),
('The Social Network', 'Kao student Harvarda, Mark Zakerberg stvara veb lokaciju za društvenu mrežu koja će postati poznata kao \'Facebook\', tužen od strane blizanaca koji tvrde da im je ukrao ideju i od suosnivača, kasnije izbačenog iz biznisa', 'Biografski, drama', 'Aron Sorkin', 'Dejvid Finčer', 'Columbia Pictures', '{\"glumac1\": \"Džesi Ajzenberg\", \"glumac2\": \"Endru Garfild\", \"glumac3\": \"Džastin Timberlejk\", \"glumac4\": \"Armi Hamer\"}', 2010, 120, 20, 'images/socialnetwork.jpg', NULL, NULL),
('The Social Dillema', 'Istraživanje opasnog uticaja društvenih mreža na ljude, sa tehničkim stručnjacima koji upozoravaju na sopstvene kreacije', 'Dokumentarni, drama', 'Dejvis Kumb, Viki Kurtis, Džef Orlovski', 'Džef Orlovski', 'Exposure Labs Argent Pictures', '{\"glumac1\": \"Tristan Haris\", \"glumac2\": \"Džaron Lanir\", \"glumac3\": \"Skaler Žisondo\", \"glumac4\": \"Šošana Zabof\"}', 2020, 94, 21, 'images/socialdilemma.jpg', NULL, NULL),
('The Great Hack', 'Ispitivanje skandala Kembridž Analitike kroz uloge nekoliko pogođenih osoba', 'Dokumentarni, biografski, istorijski', 'Karim Amer, Erin Barnet, Pedro Kos', 'Karim Amer, Džehejn Huhajm', 'The Othrs', '{\"glumac1\": \"Kerol Kadvaldr\", \"glumac2\": \"Britani Kajzer\", \"glumac3\": \"Kristofer Vajli\", \"glumac4\": \"Džulijan Vitlend\", \"glumac5\": \"Dejvid Kerol\"}', 2019, 113, 22, 'images/greathack.jpg', NULL, NULL),
('The Dictator', 'Herojski podvig diktatora koji je rizikovao svoj život da bi osigurao da se demokratija nikada neće pojaviti u zemlji koju s ljubavlju ugnjetava', 'Komedija', 'Saša Baron Koen, Dejvid Mendel, Alek Berg', 'Leri Čarls', 'Paramount Pictures', '{\"glumac1\": \"Saša Baron Koen\", \"glumac2\": \"Ana Faris\", \"glumac3\": \"Ben Kingsli\"}', 2012, 83, 23, 'images/dictator.jpg', NULL, NULL),
('The Two Popes', 'Iza vatikanskih zidova, konzervativan Papa Benedikt XVI i liberalni Papa Frensis moraju naći zajednički jezik da bi stvorili novi put za katoličku crkvu', 'Biografski, drama, komedija', 'Entoni Mekarten', 'Den Li, Trejsi Sivord', 'Rideback', '{\"glumac1\": \"Entoni Hopkins\", \"glumac2\": \"Džonatan Prajs\"}', 2019, 125, 24, 'images/twopopes.jpg', NULL, NULL),
('21 Bridges', 'Spreman za borbu, njujorški detektiv ubačen je u gradsku potragu za ubicama policajaca, nakon otkrića masovne i neočekivane zavere', 'Akcija, krimi, triler', 'Adam Mervis', 'Entoni Ruso, Džo Ruso', 'MWM Studios', '{\"glumac1\": \"Čedvik Bouzman\", \"glumac2\": \"Sijena Miler\", \"glumac3\": \"Stefan Džejms\", \"glumac4\": \"Kit Dejvid\", \"glumac5\": \"Dž. K. Simons\"}', 2019, 100, 25, 'images/21bridges.jpg', NULL, NULL),
('Bohemian Rhapsody', 'Priča o legendarnom britanskom rok bendu Queen i njihovom frontmenu Frediju Merkjuriju, koja je dovela do legendarnog nastupa na Live Aid-u (1985.)', 'Biografski, drama, muzički', 'Entoni Mekarten', 'Brajan Singer', '20th Century Fox', '{\"glumac1\": \"Remi Malek\", \"glumac2\": \"Lusi Bojnton\", \"glumac3\": \"Gvajlim Li\", \"glumac4\": \"Ben Hardi\", \"glumac5\": \"Majk Majers\", \"glumac6\": \"Ejdan Gilen\", \"glumac7\": \"Tom Holander\"}', 2018, 134, 26, 'images/bohemianrhapsody.jpg', 5, 1),
('Bolt', 'Pas, glumačka zvezda, izmišljene naučno-fantastične / akcione emisije veruje da su njegove moći stvarne. Kada veruje da je njegova vlasnica Peni oteta, kreće na putovanje preko zemlje da bi je \'spasio\'', 'Komedija, animirani film', 'Den Fogelmen, Kris Vilijams', 'Kris Vilijams, Bajron Hauard', 'Walt Disney Studios', '{\"glumac1\": \"Džon Travolta\", \"glumac2\": \"Suzi Esman\", \"glumac3\": \"Mark Volton\", \"glumac4\": \"Majli Sajrus\"}', 2008, 96, 27, 'images/bolt.jpg', NULL, NULL),
('The Gentlemen', 'Američki emigrant pokušava da proda svoje profitabilno carstvo marihuane u Londonu, praveći spletke, šeme, podmićivanje i ucene u pokušaju krađe teritorija van svoje oblasti', 'Akcija, komedija, drama', 'Gaj Riči', 'Gaj Riči', 'STX Films, Entertainment Film Distributors', '{\"glumac1\": \"Metju Mekonahej\", \"glumac2\": \"Čarli Hanam\", \"glumac3\": \"Henri Golding\", \"glumac4\": \"Mišel Dokeri\", \"glumac5\": \"Hju Grant\", \"glumac6\": \"Mišel Dokeri\", \"glumac7\": \"Džeremi Strong\"}', 2019, 113, 28, 'images/gentlemen.jpg', NULL, NULL),
('Bad Boys for Life', 'Detektivi Majamija, Majk i Markus moraju se suočiti protiv majke i sina, moćnih narko dilera, koji prave osvetnički haos u svom gradu', 'Akcija, komedija, krimi', 'Kris Bremner, Piter Krejg, Džo Karnahan', 'Adil El Arbi, Bilal Falah', 'Sony Pictures Releasing', '{\"glumac1\": \"Vil Smit\", \"glumac2\": \"Martin Lorens\", \"glumac3\": \"Vanesa Hadžens\", \"glumac4\": \"Čarls Melton\", \"glumac5\": \"Paola Nunjez\", \"glumac6\": \"Kejt del Kastiljo\"}', 2020, 124, 29, 'images/badboys.jpg', 9, 2),
('He\'s just not that into you', 'Film prati međusobno povezane priče koje se bave izazovima shvatanja (ili pogrešnog shvatanja) ljudskog ponašanja i ljubavnih signala', 'Komedija, romantika, drama', 'Mark Silverstajn, Abi Kon', 'Ken Kuopis', 'New Line Cinema', '{\"glumac1\": \"Dru Barimor\", \"glumac2\": \"Dženifer Aniston\", \"glumac3\": \"Ben Aflek\", \"glumac4\": \"Skarlet Džohanson\", \"glumac5\": \"Dženifer Koneli\"}', 2009, 129, 30, 'images/intoyou.jpg', 5, 1),
('Her', 'U bliskoj budućnosti, usamljeni pisac razvija malo verovatnu vezu sa operativnim sistemom dizajniranim da udovolji svim njegovim potrebama', 'Ljubavni, drama, sci-fi', 'Spajk Džouns', 'Spajk Džouns', 'Annapurna Pictures', '{\"glumac1\": \"Hoakin Finiks\", \"glumac2\": \"Skarlet Džohanson\", \"glumac3\": \"Ejmi Adams\", \"glumac4\": \"Runi Mara\", \"glumac5\": \"Olivija Vajld\", \"glumac6\": \"Kris Pret\"}', 2013, 126, 32, 'images/her.jpg', NULL, NULL),
('10 Things I Hate About You', 'Popularna srednjoškolka ne može izaći na dejt sa momkom koji joj se dopada, dok njena starija sestra loše volje ne uradi isto', 'Romantika, komedija', 'Karen Makalah-Lac, Kristen Smit', 'Džil Džanger', 'Buena Vista Pictures', '{\"glumac1\": \"Hit Ledžer\", \"glumac2\": \"Džulija Stajls\", \"glumac3\": \"Džozef Gordon-Levit\", \"glumac4\": \"Larisa Olejnik\"}', 1999, 99, 33, 'images/10.jpg', NULL, NULL),
('Gone Girl', 'Kako je nestanak njegove žene postao žarište intenzivne medijske pažnje, primećuje kako reflektori čine da se sumnja da možda i nije nevin', 'Drama, misterija, triler', 'Džilijan Flin', 'Dejvid Finčer', '20th Century Fox', '{\"glumac1\": \"Ben Aflek\", \"glumac2\": \"Rozamund Pajk\", \"glumac3\": \"Nil Patrik Haris\", \"glumac4\": \"Tajler Peri\", \"glumac5\": \"Kari Kun\", \"glumac6\": \"Kim Dikens\"}', 2014, 149, 34, 'images/gonegirl.jpg', NULL, NULL),
('Parasite', 'Pohlepa i klasna diskriminacija ugrožavaju novonastalu simbiozu između bogate porodice Park i siromašnog klana Kim', 'Komedija, drama, triler', 'Bong Joon-ho, Han Jin-won', 'Bong Joon-ho', 'Barunson E&A', '{\"glumac1\": \"Song Kang-ho\", \"glumac2\": \"Lee Sun-kyun\", \"glumac3\": \"Cho Yeo-jeong\", \"glumac4\": \"Choi Woo-shik\", \"glumac5\": \"Park So-dam\", \"glumac6\": \"Lee Jung-eun\", \"glumac7\": \"Jang Hye-jin\"}', 2019, 132, 35, 'images/parasite.jpg', NULL, NULL),
('How to Lose a Guy in 10 Days', 'Bendžamin Beri, izvršni marketinški direktor i majstor za žene, da bi pobedio u velikoj kampanji, kladi se da može naterati ženu da se zaljubi u njega za 10 dana', 'Komedija, romantika', 'Kristen Bakli, Brajan Regan', 'Linda Obst, Robert Evans', 'Paramount Pictures', '{\"glumac1\": \"Kejt Hadson\", \"glumac2\": \"Metju Makonahej\", \"glumac3\": \"Adam Goldberg\", \"glumac4\": \"Šelom Harlov\"}', 2003, 116, 36, 'images/10days.jpg', 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `listusers`
--

DROP TABLE IF EXISTS `listusers`;
CREATE TABLE IF NOT EXISTS `listusers` (
  `User_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_croatian_ci NOT NULL,
  `User_lastname` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_croatian_ci NOT NULL,
  `User_email` varchar(50) NOT NULL,
  `User_username` varchar(30) NOT NULL,
  `User_password` varchar(40) NOT NULL,
  `isAdmin` int(1) DEFAULT NULL,
  PRIMARY KEY (`User_username`) USING BTREE,
  UNIQUE KEY `User_username` (`User_email`) USING BTREE,
  KEY `User_password` (`User_password`) USING HASH
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `listusers`
--

INSERT INTO `listusers` (`User_name`, `User_lastname`, `User_email`, `User_username`, `User_password`, `isAdmin`) VALUES
('ADMIN', 'ADMIN', 'admin@gmail.com', 'adminGlavni', 'adminkida123', 1),
('Jovana', 'Jevtic', 'jevticj99@gmail.com', 'jovanajevtic', 'jovana123', NULL),
('Filip', 'Stefanovic', 'fiqz99@gmail.com', 'fiqz99', 'filip123', NULL),
('sara', 'jelic', 'sarica2003@gmail.com', 'saricaaa', 'sarica123', NULL),
('Kristina', 'Kovacevic', 'kiki99@gmail.com', 'KristinaKiki', 'Kristina123', NULL),
('jovana', 'jevtic', 'jevticcj99@gmail.com', 'jovanajevticc', 'jovana123', NULL),
('jovana', 'jevtic', 'jevticccj99@gmail.com', 'jovanajevticcc', 'asdfghjkl', NULL),
('mihailo', 'milic', 'mih@gmail.com', 'miha123', 'miksi123', NULL),
('Mirko', 'Petrovic', 'mirkic99@gmail.com', 'mirko123', 'mirko123', NULL),
('Katarina', 'Milosevic', 'katarina.mil@gmail.com', 'kacica123', 'kaca123', NULL),
('Milica', 'Milic', 'minamini123@gmail.com', 'minica123', 'minicamila', NULL),
('Jelena', 'Blagojevic', 'jecablag@gmail.com', 'jecablag', 'jeca123', NULL),
('Marija', 'Petrović', 'mara123@gmail.com', 'marapetrovic', 'mara123', NULL),
('Milica', 'Milic', 'milicamilic@gmail.com', 'milicamilic', 'milica123', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
