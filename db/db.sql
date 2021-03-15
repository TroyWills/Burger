DROP DATABASE IF EXISTS burger_db;
create DATABASE burger_db;
USE burger_db;

CREATE TABLE burger (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255),
devoured VARCHAR(255),
PRIMARY KEY(id)
)
    
DROP TABLE burger
SELECT * FROM burger
