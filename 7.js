/*               [ Best Time to Buy and Sell Stock  ]
You are given an array prices where prices[i] is the price of a given stock
on the ith day.
You want to maximize your profit by choosing a single day to buy one stock
and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.
*/

var maxProfit = function (prices) {
    let minPrice = Infinity; // 1 ,   
    let maxProfit = 0; // 8 , 

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};
maxProfit([7, 5, 6, 1, 5, 9, 3, 6, 4])
