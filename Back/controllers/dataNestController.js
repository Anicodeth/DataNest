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

module.exports = { getFilteredInformation };