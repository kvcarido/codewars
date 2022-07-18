// JS Array Filter
// 7 Kyu
// https://www.codewars.com/kata/514a6336889283a3d2000001

const getEvenNumbers = numbersArray => {
    return numbersArray.filter(x => x % 2 === 0)
}


// Tests
console.log(getEvenNumbers([1,2,3,6,8,10])) // [2,6,8,10]
console.log(getEvenNumbers([1,2])) // [2]


/* Pseudo Code

*/