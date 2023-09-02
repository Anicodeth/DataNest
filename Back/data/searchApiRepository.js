const axios = require('axios');

async function getSearchQuery(query){
    var query =  {}
    await axios.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyDSBkx4pkxy9rg5BeEI7MM_FA74KzHHt0o&cx=04252cdf1a7f14617&q=A2sv') // Replace with the desired URL
    .then((response) => {
      query = cleanSearch(response.data.items); // This will log the response data
    })
    .catch((err) => {
    });
    return query;
  
}


function cleanSearch(data){
    var cleanedData = [];
    data.forEach(element => {
        cleanedData.push(element.snippet);
    });

    return cleanedData;
}




module.exports = { getSearchQuery };
