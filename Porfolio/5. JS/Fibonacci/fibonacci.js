var memo = {};
function fibonacci() {
    "use strict";
    var n = document.getElementById("num").value;
    var val = f(n);
    document.getElementById("fibonacciLbl").textContent = val;
    //return f;
}

function f(n) {
    var value;
    // Check if the memory array already contains the requested number
    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        //TODO: Implement the fibonacci function here!
        if (n <= 1) {
            return n;
        }
        value = f(n-1) + f(n-2);
        memo[n] = value;
    }
    return value;
}
