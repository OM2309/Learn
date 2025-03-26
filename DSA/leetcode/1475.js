var finalPrices = function (prices) {
  let answer = [];

  for (let i = 0; i < prices.length; i++) {
    let discount = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        discount = prices[j];
        break;
      }
    }

    answer.push(prices[i] - discount);
  }
  return answer;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
