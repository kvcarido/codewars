// Fizz buzz
// 7 Kyu
// https://www.codewars.com/kata/5300901726d12b80e8000498

const fizzbuzz = n => {
    let counter = n - 1
    let ans = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            ans.push('FizzBuzz')
        else if (i % 3 === 0)
            ans.push('Fizz')
        else if (i % 5 === 0)
            ans.push('Buzz')
        else
            ans.push(i)
    }
    return ans
}


// Tests
console.log(fizzbuzz(3)) // [1, 2, 'Fizz']
console.log(fizzbuzz(16)) //
