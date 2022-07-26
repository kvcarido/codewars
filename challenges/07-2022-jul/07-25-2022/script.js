// Stop gninnipS my sdroW!
// 6 Kyu
// https://www.codewars.com/kata/5264d2b162488dc400000001

const reverse = word => word.split("").reverse().join("")

const spinWords = string => {
    return string.split(" ").map(x => x.length >= 5 ? reverse(x) : x)
}


// Tests
console.log(spinWords("Welcome")) // "emocleW"
console.log(spinWords("This is a test")) // "This is a test"
console.log(spinWords("Hey fellow warriors")) // "Hey wollef sroirraw"
console.log(spinWords("You are almost to the last test")) // "You are tsomla to the last test"

/* Pseudo Code
- string.split(" ")
- iterate thru array with map
    - if x.length <= 4, x.reverse()
*/