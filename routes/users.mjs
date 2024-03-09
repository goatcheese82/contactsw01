import express from "express";
import usersController from "../controllers/usersController.mjs";


const router = express.Router();

/*** Users Controller */

/* Get Routes */

router.get('/', /*#swagger.tags=["Users"]*/ usersController.getAllUsers);
router.get('/:id', /*#swagger.tags=["Users"]*/ usersController.getUserById);

/* Post Routes */

router.post('/', /*#swagger.tags=["Users"] #swagger.start='users'*/ usersController.createUser);

router.patch('/:id', /*#swagger.tags=["Users"] */ usersController.updateUser);

router.delete('/:id', /*#swagger.tags=["Users"]*/ usersController.deleteUser);

export default router;