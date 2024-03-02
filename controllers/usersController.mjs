import db from '../data/database.mjs';
import { ObjectId } from 'mongodb';

const getAllUsers = async (req, res) => {
   let collection = db.collection("users");
   let results = await collection.find({})
      .toArray()
      res.send(results).status(200);
}

const getUserById = async (req, res) => {
   let collection = await db.collection("users");
   let query = { _id: ObjectId(req.params.id) };
   let result = await collection.findOne(query);

   if (!result) res.send("Not found").status(404);
   else res.send(result).status(200);
}

export default { getAllUsers, getUserById };