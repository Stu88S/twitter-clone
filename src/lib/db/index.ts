import Pool from "pg-pool";

export const pool = new Pool({
	connectionString: process.env.DATABASE_CONNECTION_STRING,
	allowExitOnIdle: true,
});

// (async () => {
// 	const client = await pool.connect();
// 	try {
// 		const result = await client.query("seelct $1::text as name", ["brianc"]);
// 		console.log("hello from", result.rows[0]);
// 	} finally {
// 		client.release();
// 	}
// })().catch(e => console.error(e.message, e.stack));
