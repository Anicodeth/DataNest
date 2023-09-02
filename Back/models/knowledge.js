const mongoose = require('mongoose');

const knowledgeSchema = new mongoose.Schema({
  newKnowledge: {
    type: String,
    required: true,
  }
});

module.exports = knowledgeSchema;