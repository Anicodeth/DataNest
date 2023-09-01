const newsApiRepo = require('../data/newsApiRepository')
const palmApiRepo = require('../data/palmApiRepository')

//template for main processes
// newsApiRepo.getTopHeadlines().then((response)=>{
//     console.log(response)
// })
// palmApiRepo.generateText("tell me about chickens").then((response)=>{
//     console.log(JSON.stringify(response, null, 2))
// })

async function filteredInformation(query){
    const scrapedData = await newsApiRepo.searchNews(query);
    console.log(scrapedData);
}

