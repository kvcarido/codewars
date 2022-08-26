// DNA to RNA Conversion
// 8 Kyu
// https://www.codewars.com/kata/5556282156230d0e5e000089

const DNAtoRNA = dna => {
    return dna.replaceAll("T", "U")
}


// Tests
console.log(DNAtoRNA("TTTT")) // "UUUU"
console.log(DNAtoRNA("GCAT")) // "GCAU"
console.log(DNAtoRNA("GACCGCCGCC")) // "GACCGCCGCC"
