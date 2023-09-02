const router = require('express').Router();
const dataNestController = require('../controllers/dataNestController');
const authMiddleware = require('../middleware/authMiddleware');
router.use(authMiddleware);

//Returns summary based on key word (searches news)
router.get('/condensed/:query', dataNestController.getFilteredInformation);

//Returns Realtime data based on prompt, news and knowledge
router.get('/knowledgebased/:query', dataNestController.getKnowledgeBasedInformation);

//Returns summary based on key word  (searches google)
router.get('/searchbased/:query', dataNestController.getSearchBasedInformation);

//Returns Realtime data based on prompt and knowledge (searches google)
router.get('/searchknowledgebased/:query', dataNestController.getSearchKnowledgeBasedInformation);

//Returns Realtime data based on prompt, news and knowledge (searches google)
router.get('/searchnewsknowledgebased/:query', dataNestController.getSearchNewsKnowledgeBasedInformation);


module.exports = { router };