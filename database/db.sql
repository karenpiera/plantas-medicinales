CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    zona VARCHAR(255),
    usoMedicinal TEXT,
    contraindicacion TEXT,
    afecciones TEXT,
    description TEXT,
    nombreCientifico VARCHAR(255),
    image TEXT
);
