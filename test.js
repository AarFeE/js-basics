theProd = 'COLGATE'
const regexProd = new RegExp(`^${theProd} COPY \\d+$`)
const regexEnd = new RegExp(`\d+$`)
let regTest = 'COLGATE COPY 12'
regTest = regTest.replace(/\d+$/, '')
regTest += ':D'
console.log(regTest);
// console.log(regTest)
// console.log(regexProd.test(regTest));
// let numExt = regTest.split(' ').filter((value) => { return !isNaN(Number(value)) })
// console.log(numExt);