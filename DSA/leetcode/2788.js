function splitWordsBySeparator(words, separator) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let currentWord = "";

    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === separator) {
        if (currentWord !== "") {
          result.push(currentWord);
          currentWord = ""; // Reset for the next word
        }
      } else {
        currentWord += words[i][j];
      }
    }

    // Push the last collected word (if any) after the loop ends
    if (currentWord !== "") {
      result.push(currentWord);
    }
  }

  return result;
}

// Test cases
console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."));
// Output: ["one", "two", "three", "four", "five", "six"]

console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$"));
// Output: ["easy", "problem"]

console.log(splitWordsBySeparator(["|||"], "|"));
// Output: []
