// Isograms
// 7 Kyu
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

const isIsogram = (str) => {
    let test = new Set(str.toLowerCase())
    return test.size === str.length ? true : false
}

// Tests
console.log(isIsogram("phineas")) // true
console.log(isIsogram("aba")) // false
console.log(isIsogram("moOse")) // false, ignore case

// Go back and review this article:
// https://tygedavis.com/javascript-challenge-isogram