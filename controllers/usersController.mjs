import db from '../data/database.mjs';
import { ObjectId } from 'mongodb';

const getAllUsers = async (req, res) => {
   let collection = db.collection("users");
   let results = await collection.find({})
      .toArray()
   res.send(results).status(200);
}

const getUserById = async (req, res) => {
   let query = new ObjectId(req.params.id);
   let collection = db.collection("users");
   let result = await collection.findOne(query);

   if (!result) res.send("Not found").status(404);
   else res.send(result).status(200);
}

const createUser = async (req, res, next) => {
   //#swagger.tags=['Users']
   const user = {
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
   }
   const result = await db.collection('users').insertOne(user);
   res.send(result).status(204);
}

const updateUser = async (req, res, next) => {
   const filter = { _id: new ObjectId(req.params.id) };
   const collection = db.collection("users");
   const user = {
      $set: {
         id: req.body.id,
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         email: req.body.email,
         favoriteColor: req.body.favoriteColor,
         birthday: req.body.birthday
      }
   }
   const options = { returnOriginal: false }
   try {
      const result = await collection.findOneAndUpdate(filter, user, options);
      res.send(result).status(200);
   } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Server Error')
   }
}

const deleteUser = async (req, res, next) => {
   const filter = { _id: new ObjectId(req.params.id) };
   let collection = db.collection("users");
   try {
   const result = await collection.findOneAndDelete(filter);
   res.status(200).send('Your user was deleted.');
   } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Something went wrong');
   }
}

export default { getAllUsers, getUserById, createUser, updateUser, deleteUser };