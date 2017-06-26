/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

// First thing is turn the array(hand) and to evaluate the value of hand. 

function handValue(hand) {
    let handNum = 0;
    for (let i in hand) {
        if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
            handNum += 10;
        } else if (hand[i] === "A" && handNum >= 11) {
            handNum += 1;
        } else if (hand[i] === "A" && handNum <= 10) {
            handNum += 11;
        } else {
            handNum += parseInt(hand[i]);
        }
    }

    if (handNum > 22) {
        return handNum - 10;
    }

    return handNum;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/