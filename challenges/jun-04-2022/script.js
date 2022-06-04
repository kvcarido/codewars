// Shortest Word
// 7 Kyu
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

const findShort = (s) => {
    let counter = 20
    s.split(" ").forEach(word => {
        if (word.length < counter)
            counter = word.length
    })
    return counter
}


// Tests
console.log(findShort("bitcoin take over the world maybe who knows perhaps")) // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")) // 3
console.log(findShort("Let's travel abroad shall we")) // 2