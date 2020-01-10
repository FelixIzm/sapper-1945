import { Pool, Client } from 'pg';
const pool = new Pool({
  user: 'knhgniybaofvzc',
  host: 'c2-174-129-253-180.compute-1.amazonaws.com',
  database: 'd11jmbefcqqs5r',
  password: 'b2dacdfe00bd9da51d7175fa138f399e531175a349932b6b32a73819258c2b0f',
  port: 5432,
});
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});
const client = new Client({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
});
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});
export default client;