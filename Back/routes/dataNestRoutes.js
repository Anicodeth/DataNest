const router = require('express').Router();
const dataNestController = require('../controllers/dataNestController');
const authMiddleware = require('../middleware/authMiddleware');
router.use(authMiddleware);

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
router.get('/knowledgebased/:query', dataNestController.getKnowledgeBasedInformation);


module.exports = { router };