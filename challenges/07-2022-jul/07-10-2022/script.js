// Who likes it?
// 6 Kyu
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

const likes = names => {
    let people = names.length

    switch (people) {
        case 0:
            return 'no one likes this'
        case 1:
            return `${names[0]} likes this`
        case 2:
            return `${names[0]} and ${names[1]} like this`
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default:
            let remainder = people - 2
            return `${names[0]}, ${names[1]} and ${remainder} others like this`
    }
}


// Tests
console.log(likes([])) // 'no one likes this'
console.log(likes(['Peter'])) // 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])) // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])) // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) // 'Alex, Jacob, and 2 others like this'


// Pseudo code
/*
- switch statement?
- set variable for `names.length`
- if `names` is empty, return 'no one likes this'
- if `names` == 2, return `names[0] and `names[1]` like this
- if `names` == 3, return `names[0]`, `names[1]`, and `names[2]` like this
- if `names` >= 4, return `names[0]`, `names[1]`, and `remainder` others like this
    - set `remainder` to names.length - 2
*/