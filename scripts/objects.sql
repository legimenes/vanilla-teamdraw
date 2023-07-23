CREATE TABLE players
(
	id serial4 NOT NULL,
	name varchar(100) NOT NULL,
	level int2 NOT NULL,
	CONSTRAINT players_pkey PRIMARY KEY (id)
);
