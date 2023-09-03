const palmApiConfig = require('../configurations/palmApiConfig.js');

function generateText(promptString, stopSequences = []) {
    const client = new palmApiConfig.TextServiceClient({
      authClient: new palmApiConfig.GoogleAuth().fromAPIKey(palmApiConfig.API_KEY),
    });
  
    return client.generateText({
      model: palmApiConfig.MODEL_NAME,
      temperature: 1,
      candidateCount: 1,
      top_k: 40,
      top_p: 0.95,
      max_output_tokens: 1024,
      stop_sequences: stopSequences,
      safety_settings: [
        {"category": "HARM_CATEGORY_DEROGATORY", "threshold": 4},
        {"category": "HARM_CATEGORY_TOXICITY", "threshold": 4},
        {"category": "HARM_CATEGORY_VIOLENCE", "threshold": 4},
        {"category": "HARM_CATEGORY_SEXUAL", "threshold": 4},
        {"category": "HARM_CATEGORY_MEDICAL", "threshold": 4},
        {"category": "HARM_CATEGORY_DANGEROUS", "threshold": 4}
      ],
      prompt: {
        text: promptString,
      },
    });
  }


module.exports = { generateText };