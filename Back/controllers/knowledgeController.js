const knowledgeService = require('../services/knowledgeService');

const addKnowledge = async (req, res) => {
    try {
        const { newKnowledge } = req.body;
        const user = req.user;

        await knowledgeService.addKnowledge(user, newKnowledge);
        return res.status(200).json({ newKnowledge , message: "Added Successfully"});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  const getKnowledge = async (req, res) => {
    try {
      const { knowledgeId } = req.params;
  
      const user = req.user;
 
      const knowledgeItem = await knowledgeService.getKnowledge(user, knowledgeId);
      if (!knowledgeItem) {
        return res.status(404).json({ error: 'Knowledge item not found' });
      }
  
      return res.status(200).json({ knowledge: knowledgeItem });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  


  const getAllKnowledge = async (req, res) => {
    try {
      const user = req.user;
 
      const allKnowledge = await knowledgeService.getAllKnowledge(user);
  
      return res.status(200).json({ knowledge: allKnowledge });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  const deleteKnowledge = async (req, res) => {
    try {
      const { knowledgeId } = req.params;
      const user = req.user;

      const result = await knowledgeService.deleteKnowledge(user, knowledgeId);
  
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  const updateKnowledge = async (req, res) => {
    try {
      const { knowledgeId } = req.params;
      const { updateKnowledge } = req.body;
      const user = req.user;

      const result = await knowledgeService.updateKnowledge(user, knowledgeId, updateKnowledge);
  
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    addKnowledge,
    getKnowledge,
    getAllKnowledge,
    deleteKnowledge,
    updateKnowledge,
  };
  