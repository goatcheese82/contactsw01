import express from "express";
import usersController from "../controllers/usersController.mjs";


const router = express.Router();

/*** Users Controller */

/* Get Routes */

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);

/* Post Routes */

router.post('/', usersController.createUser);

router.patch('/:id', usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

export default router;