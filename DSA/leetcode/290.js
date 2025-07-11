var wordPattern = function (pattern, s) {
  let obj = {};
  const wordsArray = [];
  let array = s?.split(" ");
  array.map((item) => wordsArray.push(item));

  for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (obj[pattern[i]]) {
        if (obj[pattern[i]] != wordsArray[j]) {
          return false;
        }
      } else {
        obj[pattern[i]] = wordsArray[j];
      }
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
