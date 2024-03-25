'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let pathArr = path.split("");
    let count = 0;
    let valley = 0;
    
    for (let i = 0; i < pathArr.length; i++) {
        
        if(pathArr[i] === "D") {
            count--;
        } else {
            count++;
        }
        
        if(count < 0 && (pathArr[i + 1] === "U") && (count + 1 === 0)) {
            valley++;
        }
    }
    console.log(pathArr);
    return valley;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}

// Solucion  mas corta en discusiones

// function countingValleys(steps, path) {
//     // Write your code here
//     let level = 0, valleys = 0;
//     path.split('').forEach(step =>{
//         if(level == 0 && step == 'D'){
//             valleys++;
//         }
//         level = step == 'D' ? level - 1: level + 1;
//     })
//     return valleys;
// }