// Factorial
// 7 Kyu
// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript

const factorial = (n) => {
    if (n == 0)
        return 1
    else if (n < 0 || n > 12)
        throw new RangeError()
    else
        return n * factorial(n-1)

}

// Tests
console.log(factorial(0))
console.log(factorial(5))
console.log(factorial(-1))