// Anagram detection
// 7 Kyu
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

const isAnagram = (test, original) => {
    if (test.length !== original.length) {
        return false
    }
    let testStr = test.toLowerCase().split("").sort().join()
    let ogStr = original.toLowerCase().split("").sort().join()
    return testStr === ogStr ? true : false
}

// Tests
console.log(isAnagram("foefet", "toffee")) // true
console.log(isAnagram("twoo", "woot")) // true
console.log(isAnagram("kaye", "kayleen")) // false

// To blog / review:
// https://www.geeksforgeeks.org/how-to-check-a-given-string-is-an-anagram-of-another-string-in-javascript/