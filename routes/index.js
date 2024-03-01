const router = require('express').Router();

/*** Index route */

router.get('/', (req, res) => res.send("Hello World"));

module.exports = [router];