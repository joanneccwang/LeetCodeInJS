/** Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/ */
/**
 * @param {number[]} prices
 * @return {number}
 */
// if sellday > buyday => try max profit, remember last sell
// if sellday < last sell day => renew buyday, reset sellday
// if sellday < buyday => renew buyday

var maxProfit = function(prices) {
  let buyday = prices[0];
  let profit = 0;
  
  let rangeProfit = 0;
  let lastSellday = 0;
  
  let days = prices.length;
  for(let i = 1; i < days; i += 1) {
    let sellday = prices[i];
     if ((sellday < buyday) || (sellday < lastSellday)) {
      // 逢低出清手上的並買進
      buyday = sellday;
      profit += rangeProfit;
      rangeProfit = 0;
      lastSellday = 0;
    } else if (sellday > buyday) {
      // 逢高試算賣出
      if ((sellday - buyday) > rangeProfit) {
        rangeProfit = sellday - buyday;
        lastSellday = sellday;
      }
    }
  }
  profit += rangeProfit;
  
  return profit;
};