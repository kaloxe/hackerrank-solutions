function twoArrays(k, A, B) {
    const diffASum = A.map(elem =>  Math.abs(k - elem)).reduce((a, c) => a + c);
    const bSum = B.reduce((a, c) => a + c);
    return diffASum <= bSum ? 'YES' : 'NO';
}

// other solutions
const A2 = A.sort((a,b) => a - b)
const B2 = B.sort((a,b) => b - a)

const isSatisfying = A2.every((a, index)=> {
    return a + B2[index] >= k
})

return isSatisfying ? 'YES' : 'NO';

// other solutions
function twoArrays(k, A, B) {
    const countFreq = (arr) => {
        const freqArr = [];
        
        freqArr.push({...[...arr].sort().reduce((acc, el, idx)=>{
            if (el === acc.nbr){
                ++acc.cnt;
            } else {
                idx !== 0 && freqArr.push({...acc});
                acc.nbr = el;
                acc.cnt = 1;
            }
            return acc;
        } ,{nbr: -1, cnt: 0})});
        
        return freqArr;
    }
    
    const freqBArr = countFreq(B);
    const freqAArr = countFreq(A);
    
    let ans = 'YES';
    for (let freqB of freqBArr){
        const srchNbr = k - freqB.nbr;
        let sum = 
            freqAArr.reduce((sum, freqA) => 
                freqA.nbr >= srchNbr ? sum += freqA.cnt : sum, 0);
        
        if (sum < freqB.cnt){
            ans = 'NO';
            break;
        }
    }
    
    return ans;
}