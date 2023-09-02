const router = require('express').Router();
const dataNestController = require('../controllers/dataNestController');
const authMiddleware = require('../middleware/authMiddleware');
router.use(authMiddleware);


router.get('/condensed/:query', dataNestController.getFilteredInformation);
router.get('/knowledgebased/:query', dataNestController.getKnowledgeBasedInformation);
router.get('/searchbased/:query', dataNestController.getSearchBasedInformation);
router.get('/searchknowledgebased/:query', dataNestController.getSearchKnowledgeBasedInformation);

module.exports = { router };