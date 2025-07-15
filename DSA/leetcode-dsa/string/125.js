var isPalindrome = function (s) {
  let newString = s.toLowerCase();
  let alphanumeric = "";

  for (let i = 0; i < newString.length; i++) {
    const code = newString[i].charCodeAt(0);
    if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
      alphanumeric += newString[i];
    }
  }

  // Check palindrome
  let start = 0;
  let end = alphanumeric.length - 1;

  while (start <= end) {
    if (alphanumeric[start] !== alphanumeric[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
console.log(isPalindrome("0P")); // false
