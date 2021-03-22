DROP DATABASE IF EXISTS baroverview
create DATABASE baroverview;

use baroverview;

CREATE TABLE Burger (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255),
devoured TINYINT,
PRIMARY KEY(id)
)
    
SELECT * FROM Burger;
