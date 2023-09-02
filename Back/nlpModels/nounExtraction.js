const nlp = require('compromise-nlp');

function extractNouns(text) {
  // Process the text using compromise-nlp
  const doc = nlp(text);

  // Extract nouns from the document
  const nouns = doc.nouns().out('array');

  // Convert the array of nouns to a single string
  const nounsString = nouns.join(', ');

  return nounsString;
}

// Example usage
const text = "The quick brown fox jumped over the lazy dog. The lazy dog slept in the sun.";
const extractedNouns = extractNouns(text);

console.log(extractedNouns);
