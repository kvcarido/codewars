let arr = ["hello", "world"]
let arr2 = ["my", "name", "is", "Kayleen"]

let lineCount = (sentence) => {
    // create new array with line numbers
    let answer = []
    // create line counter
    let line = 1
    // iterate through array
    sentence.forEach(word => {
        // include line number with element
        // push modified element to new array
        answer.push(`${line}: ${word}`)
        // increment line
        line++
    })
    return answer
}

console.log(lineCount(arr2))