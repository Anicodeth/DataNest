const dataNestService = require('../services/dataNestService');



async function getFilteredInformation(req, res)  {
    try {
      const response = await dataNestService.getFilteredInformation();
      res.json({response:response});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  }