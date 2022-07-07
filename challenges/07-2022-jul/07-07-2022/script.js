// Complementary DNA
// 7 Kyu
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

const DNAStrand = (dna) => {
    // let ans = []
    // dna.split("").forEach(x => {
    //     if (x === "A")
    //         ans.push("T")
    //     else if (x === "T")
    //         ans.push("A")
    //     else if (x === "C")
    //         ans.push("G")
    //     else if (x === "G")
    //         ans.push("C")
    // })
    // return ans.join("")

    let pairs = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }
    
    return dna.split('').map(x => pairs[x]).join('')
}


// Tests
console.log(DNAStrand("AAAA")) // "TTTT"
console.log(DNAStrand("ATTGC")) // "TAACG"
console.log(DNAStrand("GTAT")) // "GTAT"