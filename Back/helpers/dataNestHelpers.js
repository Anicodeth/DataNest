

const currentData = (size = 15000, filteredData)=>{
    var currentDataPrompt = "";
    var articleCount = 0;
    filteredData.forEach((article)=>{  
        if (currentDataPrompt.length > size) return ; 
        currentDataPrompt += "Article " + articleCount + "\n Title: " + article.title + " \n URL: " + article.url + " \n Image: " + article.urlToImage + " \n Content: " + article.content + " \n \n";
        articleCount++;
    });
    return currentDataPrompt;
}

const prunKnowledge = (knowledge, size = 2000)=>{
    var prunedKnowledge = "";
    var prunKnowledge = 0;
    knowledge.forEach((concept)=>{
        if (prunedKnowledge.length > size) return ; 
        prunedKnowledge += "knowledge " + prunKnowledge + "\n" + concept.newKnowledge + " \n \n";
    })
    return prunedKnowledge;
}
module.exports = { currentData, prunKnowledge };