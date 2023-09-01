const newsapi = require('../configurations/newsApiConfig.js');

// Function to fetch top headlines
function getTopHeadlines(source = 'bbc-news', language = 'en') {
  return newsapi.v2.topHeadlines({
    sources: source,
    language: language,
  });
}

// Function to search for news articles
function searchNews(query = 'bitcoin', page = 1) {
  return newsapi.v2.everything({
    q: query,
    page: page,
  });
}

function getNewsSources(category = 'technology', language = 'en', country = 'us') {
  return newsapi.v2.sources({
    category: category,
    language: language,
    country: country,
  });
}

module.exports = {
  getTopHeadlines,
  searchNews,
  getNewsSources,
};
