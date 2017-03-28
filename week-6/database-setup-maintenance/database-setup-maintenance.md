# Database Setup and Maintenance

## What is a build script?:nut_and_bolt:

A build script is a series of semi-colon-separated SQL commands that creates and/or adds to the table structure within your database.

## Why is it useful? ¯\\\_(ツ)\_/¯

* Lets you easily build and replicate tables
* It's very tedious to write SQL code in the MySQL window directly
* It's transportable and reusable
* Harder to make the mistakes you might make in the command line
* It's an easier way to design your tables before creating them

## Real life demo (woop)

Start the script with **BEGIN**. This means it will try and run the entire section of code as one command. If anything isn't working, it won't execute any of the lines of code. If it can work, it will do everything.

**DROP TABLE** ensures that underlying or corrupt data is removed on rebuild and that there are no duplicates.

```sql
BEGIN;

DROP TABLE IF EXISTS famous_thieves, stolen_objects CASCADE;
```

**CREATE TABLE** :chocolate_bar:

**REFERENCES** allows you to link tables:

```sql
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
```

**INSERT** data into tables. All fields needs values, even if null (if field is not `NOT NULL` :confused:).

```sql
INSERT INTO famous_thieves (name, nationality, age, haul) VALUES
('Aladdin', 'Agrabahian', 24, 3),
('Robin Hood', 'English', 100, 500000);

INSERT INTO stolen_objects (name, worth, last_seen_location, last_stolen_by, currently_recovered) VALUES
('Bread', 3, 'Agrabah', 1, false),
('Dolla from the rich', 500000, 'Near Sherwood Forest', 2, false);

COMMIT;
```

**COMMIT** links to begin (see above).

## Commands to know about

### CASCADE

**On DROP** - when a table or field is dropped, all items that relate to it are also dropped (deleted).

**On UPDATE** - when a table or field is dropped, all items that relate to it are also updated.

You shouldn't use CASCADE on automatically incremented fields.

## Migration :bird:

:bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird::bird:

[Migration between releases](https://www.postgresql.org/docs/9.0/static/migration.html)

[Backing up, restoring and migrating (maybe useful :confused:)](https://www.digitalocean.com/community/tutorials/how-to-back-up-restore-and-migrate-postgresql-databases-with-barman-on-centos-7)
