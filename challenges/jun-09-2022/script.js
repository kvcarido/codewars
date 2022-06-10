// Remove duplicate words
// 7 Kyu
// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript

const removeDuplicates = s => {
    let arr = s.split(" ")
    let words = new Set(arr)
    return [...words].join(" ")
}


// Tests
console.log(removeDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")) // "alpha beta gamma delta"
console.log(removeDuplicates("oh hello there hello")) // "oh hello there"
console.log(removeDuplicates("phineas phineas phineas phineas phineas dog")) // "phineas dog"