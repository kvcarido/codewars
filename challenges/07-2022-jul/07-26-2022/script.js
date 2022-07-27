// Create phone number
// 6 Kyu
// https://www.codewars.com/kata/525f50e3b73515a6db000b83

const createPhoneNumber = numbers => {
    numbers.unshift("(")
    numbers.splice(4, 0, ")", " ")
    numbers.splice(9, 0, "-")
    return numbers.join("")
}


// Tests
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])) // "(111) 111-1111"

/* Pseudo Code

*/