// Remove the minimum
// 7 Kyu
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

const removeSmallest = (numbers) => {
    let test = numbers.slice()
    if (numbers.length != 0) {
        let min = test.reduce((a, b) => Math.min(a, b))
        let index = test.indexOf(min)
        test.splice(index, 1)
        return test
    } else
        return numbers
}


// Tests
console.log(removeSmallest([1, 2, 3, 4, 5])) // [2, 3, 4, 5]
console.log(removeSmallest([2, 2, 1, 2, 1])) // [2, 2, 2, 1]
console.log(removeSmallest([5, 3, 2, 1, 4])) // [5, 3, 2, 4]
console.log(removeSmallest([])) // []