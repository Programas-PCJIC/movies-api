-- to use database
use movies;

-- creating a new table
CREATE TABLE movie (
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  tittle VARCHAR(50) NOT NULL,
  year VARCHAR(4) NOT NULL,
  description VARCHAR(255) NOT NULL 
);

INSERT INTO `movie`(`tittle`,`year`,`description`) VALUES 
('Notti bianche, Le (White Nights)','2018','Good Movie'),
('King Solomons Mines','2020','Tremenda Pelicula'),
('Inhuman Resources (Redd Inc.)','2015','Vamos a ver Netflix'),
('Fortress','2012','El hit del momento')
