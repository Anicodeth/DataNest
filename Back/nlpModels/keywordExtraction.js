const nlp = require('compromise');
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const TfIdf = natural.TfIdf;

function extractKeywords(text, numKeywords = 1) {
  const doc = nlp(text);

  const sentences = doc.sentences().out('array');

  const tfidf = new TfIdf();

  sentences.forEach((sentence, index) => {
    const tokens = tokenizer.tokenize(sentence);
    tfidf.addDocument(tokens);
  });

  const keywordScores = {};

  tfidf.listTerms(0).forEach((item) => {
    keywordScores[item.term] = item.tfidf;
  });

  const sortedKeywords = Object.keys(keywordScores).sort((a, b) => {
    return keywordScores[b] - keywordScores[a];
  });

  const topKeywords = sortedKeywords.slice(0, numKeywords);
  const topKeywordsString = topKeywords.join(' ');

  return topKeywordsString
}

module.exports = { extractKeywords };