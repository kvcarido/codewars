// Array.diff
// 6 Kyu
// https://www.codewars.com/kata/523f5d21c841566fde000009

const arrayDiff = (a, b) => {
    // if (b.length == 0)
    //     return a
    // else if (b.length == 1)
    //     return a.filter(x => x != b[0])
    // else if (b.length >= 2) {
    //     return a.filter(x => b.indexOf(x) === -1)
    //     }

    return b.length === 0 ? a : a.filter(x => b.indexOf(x) === -1)
}


// Tests
console.log(arrayDiff([1, 2], [2])) // [1]
console.log(arrayDiff([1, 2, 2], [1])) // [2, 2]
console.log(arrayDiff([], [1, 2])) // []
console.log(arrayDiff([1, 2, 2], [])) // [1, 2, 2]
console.log(arrayDiff([1, 2, 3], [1, 2])) // [3]

// Pseudo code
/*

*/