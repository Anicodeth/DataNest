

const currentData = (size = 20000, filteredData)=>{
    var currentDataPrompt = "";
    var articleCount = 0;
    filteredData.forEach((article)=>{  
        if (currentDataPrompt.length > size) return ; 
        currentDataPrompt += "Article " + articleCount + "\n Title: " + article.title + " \n URL: " + article.url + " \n Image: " + article.urlToImage + " \n Content: " + article.content + " \n \n";
        articleCount++;
    });
    return currentDataPrompt;
}

module.exports = { currentData }