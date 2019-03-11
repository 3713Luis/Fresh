CREATE DATABASE webFresh_db;

USE webFresh_db;

CREATE TABLE usuarios(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    log_user VARCHAR(100),
    log_password VARCHAR(50),
    log_status INT(5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- RENAME TABLE nombre TO nombe;

DESC usuarios;

-- Se abre una terminal nueva para poder ejecutar este archivo