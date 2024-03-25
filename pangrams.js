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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let position = Array(26).fill(0);
    let sarray = s.toLowerCase().split('');
    
    for(let i = 0; i < sarray.length; i++) {
        // console.log(alphabet.includes(sarray[i]));
        if(alphabet.includes(sarray[i])){
            position[alphabet.indexOf(sarray[i])]++;
        }
    }
    // console.log(sarray);
    // console.log(position);
    return position.includes(0) ? "not pangram" : "pangram";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}

// function pangrams(s: string): string {
//     // Write your code here

//     const englishAlphabet = "abcdefghilkmnopqrstuvwxyz"

//     for(let i = 0; i < englishAlphabet.length; i ++){
        
//         if(!s.includes(englishAlphabet[i].toLocaleLowerCase()) && !s.includes(englishAlphabet[i].toUpperCase())){
//             return "not pangram"
//         }
//     }

//     return "pangram"
// }