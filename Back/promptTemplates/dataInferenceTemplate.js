
const scrapedDataInferenceTemplate = (currentData)=>{
    return `
    Based on the given data (found in quotes),
    "${currentData}".

    Return a summary of the data and also additional information.
    Write it as a packed article for a news blog.
    Do not include the article number.
    `
}

const knowledgeInferenceTemplate = (currentData, knowledge, prompt)=>{
    return `
    Based on the given data (found in quotes):
    "${currentData}".

    And knowledge (found in quotes):
    "${knowledge}".

    Answer the following question: "${prompt}"
    `
}

module.exports = { scrapedDataInferenceTemplate, knowledgeInferenceTemplate }