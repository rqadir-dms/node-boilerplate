DROP TABLE IF EXISTS "matches";

CREATE TABLE "public"."matches" (
  "id" serial PRIMARY KEY NOT NULL,
  "week" int NOT NULL,
  "home_team" character varying(3) NOT NULL,
  "away_team" character varying(3) NOT NULL,
  "stadium" character varying(255) NOT NULL,
  "code" character varying(6) UNIQUE NOT NULL,
  "created_at" timestamptz DEFAULT now() NOT NULL
);

INSERT INTO "matches" ("week", "home_team", "away_team", "stadium", "code") VALUES
(4, 'NEW', 'LEE', 'St. James'' Park', 'NEWLEE'),
(4, 'WOL', 'BRT', 'Molineux Stadium', 'WOLBRT'),
(4, 'BUR', 'ARS', 'Turf Moor', 'BURARS'),
(4, 'LIV', 'CRY', 'Anfield', 'LIVCRY'),
(4, 'MCI', 'SOU', 'Etihad Stadium', 'MCISOU'),
(4, 'NOR', 'WAT', 'Carrow Road', 'NORWAT'),
(4, 'AVL', 'EVE', 'Villa Park', 'AVLEVE'),
(4, 'BHA', 'LEI', 'Amex Stadium', 'BHALEI'),
(4, 'WHU', 'MUN', 'London Stadium', 'WHUMUN'),
(4, 'TOT', 'CHE', 'Tottenham Hotspur Stadium', 'TOTCHE');
