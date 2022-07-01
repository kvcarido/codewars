// Area or Perimeter
// 8 Kyu
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/javascript

const areaOrPerimeter = (l, w) => {
    return (l == w) ? l**2 : 2*(l + w)
}


// Tests
console.log(areaOrPerimeter(4, 4)) // area, 16
console.log(areaOrPerimeter(6, 10)) // perimeter, 32