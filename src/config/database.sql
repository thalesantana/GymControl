CREATE TABLE "instructors" (
  "id" SERIAL PRIMARY KEY,
  "avatar_url" text,
  "name" text NOT NULL,
  "birth" timestamp NOT NULL,
  "gender" text,
  "services" text,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "members" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "avatar_url" text NOT NULL,
  "gender" text,
  "email" text,
  "blood" text,
  "weight" int,
  "height" int
);
