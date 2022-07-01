// Categorize New Member
// 7 Kyu
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

const openOrSenior = data => {
    let ans = []
    data.forEach(player => {
        if (player[0] >= 55 && player[1] > 7)
            ans.push('Senior')
        else
            ans.push('Open')
    })
    return ans

    /*
    - Cool one-liner solution that uses destructuring for [age, handicap]
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

    return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open')
    */
}


// Tests
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])) // ['Open', 'Senior', 'Open', 'Senior']
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])) // ['Open', 'Open', 'Open', 'Open']
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])) // ['Senior', 'Open', 'Open', 'Open']