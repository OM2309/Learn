function firstBad(n) {
  let start = 1;
  let end = n;
  let firstBad = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (isBadVersion(mid)) {
      firstBad = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return firstBad;
}
