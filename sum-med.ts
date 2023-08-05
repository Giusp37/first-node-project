// somma e media
const arr=[1,2,3,4,5];
function somma(arr: number[]): number{
let sum=0;
for (let num of arr){
    sum +=num;
}
return sum;
}
function media(arr: number[]): number{
    return somma(arr)/arr.length;
}

console.log('somma = '+ somma(arr));
console.log('media = '+ media(arr));