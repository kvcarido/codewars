// Find the odd int
// 6 Kyu
// https://www.codewars.com/kata/54da5a58ea159efa38000836

const findOdd = a => {
    let ints = new Set(a)
    let test = [...ints].slice()
    let counter = new Object()
    
    if (a.length === 1)
        return a[0]
    else {
        test.forEach(int => counter[int] = 0)
        a.forEach(element => counter[element] += 1)

        for (let key in counter) {
            if (counter[key] % 2 !== 0)
                return Number(key)
        }
    }
}


// Tests
console.log(findOdd([10])) // 10
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])) // 5
console.log(findOdd([1,1,1,1,10,1,1])) // 10


// Pseudo code
/*
- if `a.length === 1`, return `a[0]`
- create a Set `ints` to find all possible ints in `a`
- create an object `counter`
    - { `int`: 0 }
- loop thru `a`
    - `ints[x] += 1`
*/