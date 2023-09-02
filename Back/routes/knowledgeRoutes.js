const router = require('express').Router();
const knowledgeController = require('../controllers/knowledgeController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.post('/add', knowledgeController.addKnowledge);

// Get Knowledge
router.get('/getbyid/:knowledgeId', knowledgeController.getKnowledge);

// Get All Knowledge
router.get('/getall', knowledgeController.getAllKnowledge);

// Delete Knowledge
router.delete('/delete/:knowledgeId', knowledgeController.deleteKnowledge);

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

// Update Knowledge
router.put('/update/:knowledgeId', knowledgeController.updateKnowledge);

module.exports = { router };