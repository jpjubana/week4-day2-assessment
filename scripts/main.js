/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

// First thing is to evaluate the value of hand.
// Turn the string into numbers.
function handValue(hand) {
    //Use the reduce function to reduce the hand array into a single value.
    let value = hand.reduce((prev, cur) => prev + cur);
    return value;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/