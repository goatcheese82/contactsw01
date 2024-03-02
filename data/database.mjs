import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);



let conn;

try {
   conn = await client.connect();
} catch(e) {
   console.error(e);
}

let db = conn.db("contacts");

export default db;


// const initDB = (c) => {
//    if (database) {
//       console.log("DB is already initialized");
//       return c(null, database);
//    }
//    MongoClient.connect(process.env.MONGODB_URL)
//       .then(client => {
//          database = client;
//          c(null, database);
//       })
//       .catch(err => {
//          c(err);
//       });
// };


// const getDatabase = () => {
//    if (!database) {
//       throw Error("DB is not installed")
//    }
//    return database
// }

// module.exports = { initDB, getDatabase }