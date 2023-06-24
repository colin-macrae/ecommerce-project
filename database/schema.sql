set client_min_messages to warning;

-- DANGER: `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."products" (
	"productId" serial NOT NULL,
	"type" text NOT NULL,
	"gender" text NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"details" text NOT NULL,
	"price" decimal NOT NULL,
	"color" text NOT NULL,
  "url" text NOT NULL,
	CONSTRAINT "products_pk" PRIMARY KEY ("productId")
) WITH (
  OIDS=FALSE
);
