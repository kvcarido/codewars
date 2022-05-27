// Sort array by string length
// 7 Kyu
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

const sortByLength = (arr) => {
    return arr.sort((a,b) => a.length - b.length)
}


// Tests
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])) // ["Eyes", "Glasses", "Monocles", "Telescopes"]
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"])) // ["", "Pizza", "Brains", "Moderately"]
console.log(sortByLength(["Longer", "Longest", "Short"])) // ["Short", "Longer", "Longest"]