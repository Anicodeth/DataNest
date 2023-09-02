const dataNestService = require('../services/dataNestService');


async function getFilteredInformation(req, res)  {
    try {
      const query = req.params.query;
      const response = await dataNestService.filteredInformation(query);
      res.json({response:response});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  }

async function getKnowledgeBasedInformation(req, res)  {
    try {
      const query = req.params.query;
      const response = await dataNestService.knowledgeBasedRealtimeInformation(req.user, query);
      res.json({response:response});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  }

module.exports = { getFilteredInformation , getKnowledgeBasedInformation};