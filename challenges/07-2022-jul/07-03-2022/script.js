// Check the exam
// 7 Kyu
// https://www.codewars.com/kata/5a3dd29055519e23ec000074

const checkExam = (array1, array2) => {
    let score = 0
    array1.forEach((x, i) => {
        if (x === array2[i]) 
            score += 4
        else if ("" === array2[i]) 
            score += 0
        else 
            score -= 1
    })
    return score < 0 ? 0 : score
}


// Tests
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) // 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])) // 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) // 16
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])) // 0


// Pseudo code
/*
- create variable for score
- compare each element in array2 to array1
    - if element is the same, add 4 to `score`
    - if element is not the same, subtract 1 from `score
    - if element is blank, add 0 to `score`
- return the score
- if score < 0, return 0
*/