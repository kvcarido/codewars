// String ends with?
// 7 Kyu
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

const solution = (str, ending) => {
    return str.endsWith(ending) ? true : false
}


// Tests
console.log(solution("abcde", "cde")) // true
console.log(solution("kayleen", "z")) // false
console.log(solution("abc", "d")) // false
console.log(solution("abcde", "abc")) // true 

// Definitely over-engineered the approach to this challenge, looked up string properties and methods and found str.includes() first, then str.endsWith()
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods