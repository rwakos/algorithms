/*
* Fibonacci series Iterative O(n)
* */
/*
function fib(n){
    const result = [0, 1];
    for (let i = 2; i <= n; i++){
        let add = result[i-2] + result[i-1];
        result.push(add);
    }
    return result[n];
}
*/
/* Recursive  E~2 */
/*
function fib(n){
    if (n<2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}*/

/* Memoize way */
function memoize(fn){
    const cache = {};
    return function (...args){
        if (!cache[args]){
            cache[args] = fn.apply(this,args);
        }
        return cache[args];
    }
}

function previousFib(n){
    if (n<2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

const fib = memoize(previousFib);

module.exports = fib;