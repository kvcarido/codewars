// Is it a palindrome?
// 7 Kyu
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

const isPalindrome = (x) => {
    let test = x.toLowerCase().split('').reverse().join('')
    return x.toLowerCase() === test ? true : false

}


// Tests
console.log(isPalindrome("a")) // true
console.log(isPalindrome("abba")) // true
console.log(isPalindrome("hello")) // false
console.log(isPalindrome("MaDam")) // true