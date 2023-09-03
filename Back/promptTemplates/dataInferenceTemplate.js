
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

    And additional information that you know:

    Answer the following question: "${prompt}" .
    
    if the given data was not enough to answer the question, then use your personal knowledge to answer the question.
    `
}

const  extractKeyword = (query) => {
    return `
    return one word that best describes the following query: "${query}",
    return only the word.
    `
}

const extractSearch = (query) => {
    return `
    Change the following quoted text to it's possible google search alternative: "${query}". make it well condensed and short.
    `
}

const searchDataInferenceTemplate = (currentData)=>{
    return `
    Based on the given google search data (found in quotes),
    "${currentData}".

    Return a summary of the data and also additional information.
    Write it as a packed article for a news blog.
    Do not include the article number.
    `
}


const searchKnowledgeInferenceTemplate = (currentData, knowledge, prompt)=>{
    return `
    Based on the given google search data (found in quotes):
    "${currentData}".

    And knowledge (found in quotes):
    "${knowledge}".

    And additional information that you know:

    Answer the following question: "${prompt}" .
    
    if the given data was not enough to answer the question, then use your personal knowledge to answer the question.
    `
}

const searchNewsKnowledgeInferenceTemplate = (currentData, currentNews, knowledge, prompt)=>{
    return `
    Based on the given google search data (found in quotes):
    "${currentData}".

    And knowledge (found in quotes):
    "${knowledge}".

    And News data (found in quotes):
    "${currentNews}".

    And additional information that you know:

    Answer the following question: "${prompt}" .
    
    if the given data was not enough to answer the question, then use your personal knowledge to answer the question.
    `
}
module.exports = { scrapedDataInferenceTemplate, 
    knowledgeInferenceTemplate , 
    extractKeyword,
    searchDataInferenceTemplate,
    searchKnowledgeInferenceTemplate,
    searchNewsKnowledgeInferenceTemplate,
    extractSearch}