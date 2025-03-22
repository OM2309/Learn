function shortestCompletingWord(licensePlate, words) {
  let clearString = "";

  for (let i = 0; i < licensePlate.length; i++) {
    let ch = licensePlate.charCodeAt(i);
    if ((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122)) {
      clearString += licensePlate[i].toLowerCase();
    }
  }

  let clearStringLetterCount = {};
  for (let i = 0; i < clearString.length; i++) {
    let char = clearString[i];
    if (clearStringLetterCount[char]) {
      clearStringLetterCount[char]++;
    } else {
      clearStringLetterCount[char] = 1;
    }
  }

  let shortestWord = null;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let wordLetterCount = {};

    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      if (wordLetterCount[char]) {
        wordLetterCount[char]++;
      } else {
        wordLetterCount[char] = 1;
      }
    }

    let isValid = true;
    let keys = Object.keys(clearStringLetterCount);
    for (let k = 0; k < keys.length; k++) {
      let key = keys[k];
      if (
        !wordLetterCount[key] ||
        wordLetterCount[key] < clearStringLetterCount[key]
      ) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      if (shortestWord === null || word.length < shortestWord.length) {
        shortestWord = word;
      }
    }
  }

  return shortestWord;
}

console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
);
