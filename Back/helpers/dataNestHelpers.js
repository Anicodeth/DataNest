

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

const prunSearch = (search, size = 2000)=>{
    var prunedSearch = "";
    var prunSearch = 0;
    search.forEach((concept)=>{
        if (prunedSearch.length > size) return ; 
        prunedSearch += "search " + prunSearch + "\n" + concept  + " \n \n";
    }
    )
    return prunedSearch;
}

module.exports = { currentData, prunKnowledge,  
    prunSearch};