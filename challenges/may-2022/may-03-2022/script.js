// Jaden Casing Strings
// 7 Kyu
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

const toJadenCase = (str) => {
    let words = str.split(" ")
    let ans = words.map((word) => {
        return word[0].toUpperCase() + word.slice(1)
    }).join(" ")
    return ans
}


// Tests
console.log(toJadenCase("How can mirrors be real if our eyes aren't real")) // How Can Mirrors Be Real If Our Eyes Aren't Real
console.log(toJadenCase("this is how we do it")) // This Is How We Do It
console.log(toJadenCase("yerrrrr what's really good"))