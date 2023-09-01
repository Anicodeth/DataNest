
const scrapedDataInferenceTemplate = (currentData)=>{
    return `
    Based on the given data (found in quotes),
    "${currentData}".

    Return a summary of the data and also additional information.
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