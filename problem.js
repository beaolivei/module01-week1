// Grab arguments passed on the terminal
const process = require('process');
const arguments = process.argv

// make sure that we are only dealing with numbers
const numericalArguments = []
for( const arg of arguments){
    const elToNumber = Number(arg)
    if (!isNaN(elToNumber)){
        numericalArguments.push(elToNumber)
    }
}

// add up the numbers
let total = 0
for(const number of numericalArguments){
    total += number
}

// console.log our result
console.log('total is:', total)



