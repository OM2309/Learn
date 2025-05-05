var lengthOfLongestSubstring = function (s) {
  let seen = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
