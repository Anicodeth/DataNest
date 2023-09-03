const nlp = require('compromise-nlp');

function extractNouns(text) {
  const doc = nlp(text);

  const nouns = doc.nouns().out('array');

  const nounsString = nouns.join(', ');

  return nounsString;
}

const text = "The quick brown fox jumped over the lazy dog. The lazy dog slept in the sun.";
const extractedNouns = extractNouns(text);

console.log(extractedNouns);
