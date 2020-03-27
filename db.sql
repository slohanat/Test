DROP TABLE IF EXISTS "meiern"."lobby";
DROP TABLE IF EXISTS "meiern"."user";
DROP TYPE IF EXISTS userstate;

CREATE TYPE userstate AS ENUM("loggedin", "inlobby", "ingame");

CREATE TABLE "meiern"."user" (
    "id" serial PRIMARY KEY,
    "name" character varying UNIQUE NOT NULL,
    "pwsalt" character(128) NOT NULL,
    "pwhash" character(128) NOT NULL,
    "session" character(128),
    "state" userstate NOT NULL,
    "location" integer
) WITH (oids = false);

INSERT INTO "user" ("id", "name", "pwsalt", "pwhash", "session", "state", "location") VALUES (1, 'Baba', 'dd07d6fac86da756767ad680e61eb0e228de5f8a222ed062cc614e312a1b54a818a551f8fbd8aadcee0b2c495f36cb8f5692389f94f3ae11ef9840bc6d23f2cc', 'b9d44c2fbffe65941b47527233e631ef48034c71442e2fa2c87809e3f40c57f8c9e69fd3fee3c75c10e6aad15264a38ed5532a756d91d7f751743fc8668ab00b', '31e35d8da125de54cbc6827d3503d0e4ae0051f35e3ecd59c8436773b8f1cad2b3add650693f5f53f920d955fb11cf8889d2ce4520371c7dd1e297e4838294ed', 'loggedin', NULL);

CREATE TABLE "meiern"."lobby" (
    "id" serial PRIMARY KEY,
    "name" character varying NOT NULL,
    "owner" integer NOT NULL REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE,
    "maxplayers" integer NOT NULL,
    "numlives" integer NOT NULL
) WITH (oids = false);

INSERT INTO "lobby" ("id", "name", "owner", "maxplayers", "numlives") VALUES (1, 'Hall of Game', 1, 7, 42);
