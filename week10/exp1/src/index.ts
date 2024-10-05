import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresurl",
});

async function createUserstable() {
  await client.connect();
  const result = await client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
  console.log(result);
  await client.end();
}

async function insertIntotable(usernanme: string, password: string,email: string) {
  await client.connect();

//   const result = await client.query(`
//         INSERT INTO users (username, email, password) VALUES (
//         'tanmay',
//         'email@gmail.com',
//         'pass'
//         );
//     `);

    //this is the wrong way of doing this since it can cause SQL injection 
    //that is anyone from the browser can get access to the DB and delete data from it

    //so to avvoid this what we do is 

    const isnertQuery = "insert into users(username,email,password) values($1,$2,$3);"
    const values = [usernanme,password,email];
    const result = await client.query(isnertQuery,values);

  console.log(result);
  await client.end();
}
// createUserstable();
insertIntotable("viplove34","vippi@gmail.cim","2893674");
