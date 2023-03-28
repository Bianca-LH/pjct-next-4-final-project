export async function up(sql) {
  await sql`
  CREATE TABLE floras (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    flora_title varchar(50) NOT NULL,
    year varchar(10) NOT NULL,
    media varchar(80) NOT NULL,
    size varchar(30) NOT NULL,
    url varchar(180) NOT NULL
   )
  `;
}

export async function down(sql) {
  await sql`
  DROP TABLE floras
  `;
}
