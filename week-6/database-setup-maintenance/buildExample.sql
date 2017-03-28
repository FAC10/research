BEGIN;

DROP TABLE IF EXISTS famous_thieves, stolen_objects CASCADE;

CREATE TABLE famous_thieves (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  nationality VARCHAR(30) NOT NULL,
  age INTEGER NOT NULL,
  haul INTEGER
);

CREATE TABLE stolen_objects (
id SERIAL PRIMARY KEY,
name VARCHAR(30) NOT NULL,
worth INTEGER,
last_seen_location VARCHAR(30) NOT NULL,
last_stolen_by INTEGER REFERENCES famous_thieves(id),
currently_recovered BOOLEAN
);

INSERT INTO famous_thieves (name, nationality, age, haul) VALUES
('Aladdin', 'Agrabahian', 24, 3),
('Robin Hood', 'English', 100, 500000);

INSERT INTO stolen_objects (name, worth, last_seen_location, last_stolen_by, currently_recovered) VALUES
('Bread', 3, 'Agrabah', 1, false),
('Dolla from the rich', 500000, 'Near Sherwood Forest', 2, false);

COMMIT;
