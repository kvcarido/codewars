// Simple beads count
// 7 Kyu
// https://www.codewars.com/kata/58712dfa5c538b6fc7000569

const countRedBeads = (n) => {
    return (n < 2) ? 0 : n * 2 - 2
}


// Tests
console.log(countRedBeads(0)) // 0
console.log(countRedBeads(1)) // 0
console.log(countRedBeads(3)) // 4
console.log(countRedBeads(5)) // 8