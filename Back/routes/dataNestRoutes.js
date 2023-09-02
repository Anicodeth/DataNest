const router = require('express').Router();
const dataNestController = require('../controllers/dataNestController');


/**
 * @swagger
 * /filterInformation/{query}:
 *   get:
 *     description: Retrieve filtered information.
 *     parameters:
 *       - in: path
 *         name: query
 *         required: true
 *         description: The query parameter.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */

router.get('/condensed/:query', dataNestController.getFilteredInformation);


module.exports = { router };