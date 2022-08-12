// Money money money
// 7 Kyu
// https://www.codewars.com/kata/563f037412e5ada593000114

const calculateYears = (principal, interest, tax, desired) => {
    let years = 0
    while (principal < desired) {
        principal += (principal * interest) * (1 - tax)
        years++
    }

    return years
}


// Tests
console.log(calculateYears(1000, 0.05, 0.18, 1100)) // 3


/* Pseudo Code
- `interest` is paid yearly
- taxes paid (`taxes`) annually, then new sum is reinvested
- looking for how many years it'll take for `principal` to reach `desired`
*/