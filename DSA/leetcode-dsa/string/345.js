var reverseVowels = function (s) {
  const obj = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
    A: "A",
    E: "E",
    I: "I",
    O: "O",
    U: "U",
  };

  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    if (!obj(s[i])) {
      start++;
    }

    if (!obj(s[j])) {
      end++;
    }

    if (obj(s[i]) && obj(s[j])) {
    }
  }
};

console.log(reverseVowels("IceCreAm"));
