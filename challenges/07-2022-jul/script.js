// Small enough? (Beginner)
// 7 Kyu
// https://www.codewars.com/kata/57cc981a58da9e302a000214

const smallEnough = (a, limit) => {
    let compare = a.filter(x => x <= limit)
    return a.length === compare.length ? true : false
}


// Tests
console.log(smallEnough([66, 101], 200)) // true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)) // false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)) // true

// Pseudo code
/* 
- iterate thru all element of array `a`
- check if each value is <= to `limit`
    - if true, push to new array
- compare if original array `a` and new array have equal length
    - if equal, return true
    - else return false
*/