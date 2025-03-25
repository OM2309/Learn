var uniqueMorseRepresentations = function (words) {
  const morseCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  const anotherArr = new Set();

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let morseWord = "";
    for (let j = 0; j < word.length; j++) {
      if (morseCode[word[j]]) {
        morseWord += morseCode[word[j]];
      }
    }

    anotherArr.add(morseWord);
  }

  return anotherArr.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
console.log(uniqueMorseRepresentations(["a"]));
console.log(
  uniqueMorseRepresentations(["rwjje", "aittjje", "auyyn", "lqtktn", "lmjwn"])
);
