var maxScoreWords = function (words, letters, score) {
  return getMaxScore(0, words, letters, score);
};

const getMaxScore = (index, words, letters, scores) => {
  if (index >= words.length) return 0;

  let consider = 0;
  if (isValidWord(words[index], letters)) {
    const tempLetters = [...letters];
    words[index]
      .split("")
      .forEach((letter) => tempLetters.splice(tempLetters.indexOf(letter), 1));
    consider =
      getScore(words[index], scores) +
      getMaxScore(index + 1, words, tempLetters, scores);
  }

  const dontConsider = getMaxScore(index + 1, words, letters, scores);

  return Math.max(consider, dontConsider);
};

const isValidWord = (word, letters) => {
  let temp = [...letters];
  return word.split("").every((letter) => {
    const res = temp.includes(letter);
    temp.splice(temp.indexOf(letter), 1);
    return res;
  });
};

const getScore = (word, scores) => {
  return word.split("").reduce((sum, _, i) => {
    const index = word.charCodeAt(i) - 96;
    sum += scores[index - 1];
    return sum;
  }, 0);
};