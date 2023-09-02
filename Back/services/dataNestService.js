const newsApiRepo = require('../data/newsApiRepository')
const palmApiRepo = require('../data/palmApiRepository')
const dataNestHelper = require('../helpers/dataNestHelpers')
const promptTemplates = require('../promptTemplates/dataInferenceTemplate')
const keywordExtractor = require('../nlpModels/keywordExtraction')
const searchApiRepo = require('../data/searchApiRepository')

//template for main processes
// newsApiRepo.getTopHeadlines().then((response)=>{
//     console.log(response)
// })
// palmApiRepo.generateText("tell me about chickens").then((response)=>{
//     console.log(JSON.stringify(response, null, 2))
// })

async function knowledgeBasedRealtimeInformation(user, question){
        const toBeProcessed  = promptTemplates.extractKeyword(question);
        const keyword = await palmApiRepo.generateText(toBeProcessed);
        const scrapedData = await newsApiRepo.searchNews(keyword);;   
        const filteredData = scrapedData.articles.map((article)=>{
            return {
                title: article.title,
                description: article.description,
                url: article.url,
                source: article.source.name,
                urlToImage: article.urlToImage,
                content: article.content
            }
        });
        const knowledge = dataNestHelper.prunKnowledge(user.knowledge, 1000);
    
        const currentDataPrompt = dataNestHelper.currentData(2500, filteredData);
    
        const prompt = promptTemplates.knowledgeInferenceTemplate(currentDataPrompt, knowledge, question);
    
        const summary = await palmApiRepo.generateText(prompt);
        try{
            const paragraph = summary[0].candidates[0].output;
            return  paragraph;
    
        }catch(err){
            return "No Information due to " + summary[0].filters[0].reason + " Protocol ";   
        }    
    
        }

async function filteredInformation(query){
            const scrapedData = await newsApiRepo.searchNews(query);
        
            const filteredData = scrapedData.articles.map((article)=>{
                return {
                    title: article.title,
                    description: article.description,
                    url: article.url,
                    source: article.source.name,
                    urlToImage: article.urlToImage,
                    content: article.content
                }
            });
        
            const currentDataPrompt = dataNestHelper.currentData(3000, filteredData);
            const knowledge = dataNestHelper.prunKnowledge(user.knowledge, 1000);

            const prompt = promptTemplates.searchKnowledgeInferenceTemplate(currentDataPrompt, knowledge, query);
        
            const summary = await palmApiRepo.generateText(prompt );
            try{
                const paragraph = summary[0].candidates[0].output;
                return  paragraph;
        
            }catch(err){
                
                return "No Information due to " + summary[0].filters[0].reason + " Protocol ";   
            }    
        
            }


async function searchBasedInformation(query){

                const filteredData = await searchApiRepo.getSearchQuery(query);
            
                const currentDataPrompt = dataNestHelper.prunSearch(filteredData, 3000);
             
                const prompt = promptTemplates.searchDataInferenceTemplate(currentDataPrompt);
                 const summary = await palmApiRepo.generateText(prompt );
                try{
                    const paragraph = summary[0].candidates[0].output;
                    return  paragraph;
            
                }catch(err){  
                    return "No Information due to " + summary[0].filters[0].reason + " Protocol ";   
                }    
            
        }
    

async function searchKnowledgeBasedInformation(user, query){

            const filteredData = await searchApiRepo.getSearchQuery(query);
        
            const currentDataPrompt = dataNestHelper.prunSearch(filteredData, 2500);
            const currentNewsDataPrompt = dataNestHelper.currentData(2500, filteredData);

            const prompt = promptTemplates.searchNewsKnowledgeInferenceTemplate(currentDataPrompt, currentNewsDataPrompt, user.knowledge, query);
            const summary = await palmApiRepo.generateText(prompt );
            try{
                const paragraph = summary[0].candidates[0].output;
                return  paragraph;
        
            }catch(err){  
                return "No Information due to " + summary[0].filters[0].reason + " Protocol ";   
            }    
        
    }

    

async function searchNewsKnowledgeBasedInformation(user, query){
    const toBeProcessed  = promptTemplates.extractKeyword(question);
    const keyword = await palmApiRepo.generateText(toBeProcessed);
    const scrapedData = await newsApiRepo.searchNews(keyword);;   
    const filteredNewsData = scrapedData.articles.map((article)=>{
        return {
            title: article.title,
            description: article.description,
            url: article.url,
            source: article.source.name,
            urlToImage: article.urlToImage,
            content: article.content
        }
    });
    const filteredData = await searchApiRepo.getSearchQuery(query);

    const currentDataPrompt = dataNestHelper.prunSearch(filteredData, 3000);
    
    const prompt = promptTemplates.searchKnowledgeInferenceTemplate(currentDataPrompt, user.knowledge, query);
    const summary = await palmApiRepo.generateText(prompt );
    try{
        const paragraph = summary[0].candidates[0].output;
        return  paragraph;

    }catch(err){  
        return "No Information due to " + summary[0].filters[0].reason + " Protocol ";   
    }    

}

module.exports = { filteredInformation 
                 , knowledgeBasedRealtimeInformation,
                   searchBasedInformation
                 , searchKnowledgeBasedInformation} ;