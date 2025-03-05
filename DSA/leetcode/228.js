var strStr = function (haystack, needle) {
  if (haystack.length < needle.length) return -1;

  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  }

  return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
