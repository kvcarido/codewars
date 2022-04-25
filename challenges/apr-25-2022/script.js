// Vowel Count
// 7 Kyu
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

const getCount = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    let arr = str.split('')

    for (let letter of arr) {
        vowels.forEach(vowel => {
            if (vowel === letter)
                vowelCount++
        })
    }
    return vowelCount
}


// Tests
console.log(getCount("abracadabra")) // 5
console.log(getCount("kayleen carido")) // 6
console.log(getCount("wtht vwls")) // 0

// Notes
// Tough at first, but happy to make this work. First 7 kyu! I really wanted to make .filter() work but couldn't figure out the logic without confusing myself. Found an interesting solve closest to what I was trying to achieve:

function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }