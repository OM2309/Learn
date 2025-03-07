function spellChecker(wordlist, queries) {

   let exactWords = new Set(wordlist);

  // ✅ Step 2: Capitalization match aur vowel errors ke liye maps banao
  let capMap = new Map();
  let vowelMap = new Map();

  // ✅ Step 3: Wordlist ko process karo
  for (let word of wordlist) {
    let lowerWord = word.toLowerCase(); // Sabko lowercase me convert karo

    // 🔹 Capitalization ke liye: Agar pehle se word nahi hai toh pehle wala daalo
    if (!capMap.has(lowerWord)) {
      capMap.set(lowerWord, word);
    }

    // 🔹 Vowel replacement ke liye: Vowel hata ke store karo
    let vowelless = replaceVowels(lowerWord);
    if (!vowelMap.has(vowelless)) {
      vowelMap.set(vowelless, word);
    }
  }

  // ✅ Step 4: Har query ko process karo
  return queries.map((query) => {
    // 1️⃣ Exact match check karo
    if (exactWords.has(query)) return query;

    let lowerQuery = query.toLowerCase(); // Query ko lowercase me convert karo

    // 2️⃣ Capitalization match check karo
    if (capMap.has(lowerQuery)) return capMap.get(lowerQuery);

    // 3️⃣ Vowel error match check karo
    let vowellessQuery = replaceVowels(lowerQuery);
    if (vowelMap.has(vowellessQuery)) return vowelMap.get(vowellessQuery);

    // 4️⃣ Agar kuch bhi match nahi mila toh return ""
    return "";
  });
}

// ✅ Yeh function vowels ko '*' se replace karega
function replaceVowels(word) {
  return word.replace(/[aeiou]/g, "*");
}

// ✅ Test case run karo
console.log(
  spellChecker(
    ["KiTe", "kite", "hare", "Hare"],
    [
      "kite",
      "Kite",
      "KiTe",
      "Hare",
      "HARE",
      "Hear",
      "hear",
      "keti",
      "keet",
      "keto",
    ]
  )
);
