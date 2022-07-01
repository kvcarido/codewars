// Find the middle element
// 7 Kyu
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

const gimme = triplet => {
    let copy = triplet.slice()
    let target = copy.sort((a, b) => a - b)[1]
    return triplet.indexOf(target)
}

/*
- iterate through the array and sort them in ascending order
- target the element at index 1 of sorted array
- use indexOf of targeted number
*/

// Tests
console.log(gimme([2, 3, 1])) // 0
console.log(gimme([2.1, 3.2, 1.4])) // 0
console.log(gimme([-5, -10, -14])) // 1