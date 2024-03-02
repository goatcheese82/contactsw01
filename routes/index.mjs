import express from "express";
import users from "../routes/users.mjs"

const router = express.Router();

/*** Index route */
router.get('/', (req, res) => res.send("Hello World"));

/*** users routes */
router.get('/users', users);

export default router;