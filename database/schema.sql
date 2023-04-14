set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."Products" (
	"productId" serial NOT NULL,
	"type" serial NOT NULL,
	"gender" serial NOT NULL,
	"name" serial NOT NULL,
	"description" serial NOT NULL,
	"details" serial NOT NULL,
	"price" serial NOT NULL,
	"color" serial NOT NULL,
	CONSTRAINT "Products_pk" PRIMARY KEY ("productId")
) WITH (
  OIDS=FALSE
);
