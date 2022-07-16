

// Calculate average
// 8 Kyu
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

const find_avg = array => {
    if (array.length < 1)
        return 0
    else {
        let total = array.reduce((total, n) => total + n)
        return total / array.length
    }
}


// Tests
console.log(find_avg([1,1,1])) // 1
console.log(find_avg([2,3,4]))
console.log(find_avg([1,2,3,4])) // 2.5