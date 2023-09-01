const newsApiRepo = require('../data/newsApiRepository')
const palmApiRepo = require('../data/palmApiRepository')
const dataNestHelper = require('../helpers/dataNestHelpers')
const promptTemplates = require('../promptTemplates/dataInferenceTemplate')

//template for main processes
// newsApiRepo.getTopHeadlines().then((response)=>{
//     console.log(response)
// })
// palmApiRepo.generateText("tell me about chickens").then((response)=>{
//     console.log(JSON.stringify(response, null, 2))
// })

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

    const prompt = promptTemplates.scrapedDataInferenceTemplate(currentDataPrompt);

    const summary = await palmApiRepo.generateText(prompt);
    try{
        const paragraph = summary[0].candidates[0].output;
        return  paragraph;

    }catch(err){
        return "No Information due to " + summary[0].filters[0].reason + " Protocol ";   
    }    

    }


module.exports = { filteredInformation } ;