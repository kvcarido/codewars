// Calculate BMI
// 8 Kyu
// https://www.codewars.com/kata/57a429e253ba3381850000fb

const bmi = (weight, height) => {
    let bmi = (weight / (height ** 2)).toFixed(1)
    if (bmi <= 18.5)
        return "Underweight"
    else if (bmi <= 25)
        return "Normal"
    else if (bmi <= 30)
        return "Overweight"
    else (bmi > 30)
        return "Obese"
}

// Tests
console.log(bmi(80, 1.80)) // "Normal"
console.log(bmi(100, 12)) // 
console.log(bmi()) // 


/* Pseudo Code

*/