/** Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ */
/**
 * @param {number[]} prices
 * @return {number}
 */
// buyday
// if sellday > buyday => try max
// if sellday < buyday => sellday is new buyday
var maxProfit = function(prices) {
  let profit = 0;
  let buyday = prices[0];
  
  for(let i = 0; i < prices.length; i += 1) {
    let sellday = prices[i];
    if (sellday > buyday) profit = Math.max(profit, (sellday - buyday));
    else if (sellday < buyday) buyday = prices[i];
  }
  return profit;
};