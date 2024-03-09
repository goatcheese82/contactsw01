import express from "express";
import users from "../routes/users.mjs";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };

const router = express.Router();


/*** Swagger */

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

/*** Index route */
router.get('/', (req, res) => res.send("Hello World"));

/*** users routes */
router.get('/users',  /*#swagger.tags=['Users']*/ users);

export default router;