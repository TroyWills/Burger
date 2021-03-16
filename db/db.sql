DROP DATABASE IF EXISTS burger;
create DATABASE burger;
USE burger;

CREATE TABLE burger (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255),
devoured VARCHAR(255),
PRIMARY KEY(id)
)
    
SELECT * FROM burger
