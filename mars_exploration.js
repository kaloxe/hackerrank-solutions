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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    // Write your code here
    let sarray = s.split('');
    let count = 0;
    
    for(let i = 0; i < sarray.length; i++) {
        if((i + 1) % 3 === 0) {
            if(sarray[i] !== "S") {
                count++;
            }
        } else if((i + 1) % 3 === 1) {
            if(sarray[i] !== "S") {
                count++;
            }
        } else if((i + 1) % 3 === 2) {
            if(sarray[i] !== "O") {
                count++;
            }
        }
    }
    console.log(sarray);
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}
