import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql =
  postgres();
  // 'postgres://pjct_next_4_final_project:pjct_next_4_final_project@localhost:5432/pjct_next_4_final_project',

console.log(
  await sql`
  SELECT * FROM floras
  `,
);

await sql.end();
