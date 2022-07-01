// Disemvowel Trolls
// 7 Kyu
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

const disemvowel = (str) => {
    const vowels = ["a", "e", "i", "o", "u"]
    let arr = str.split('')
    return arr
}


// Tests
console.log(disemvowel("Kayleen Carido")) // Kyln Crd
// console.log(disemvowel("This website is for losers LOL!")) // Ths wbst s fr lsrs LL!
// console.log(disemvowel("What are you, a communist?")) // Wht r y,  cmmnst?