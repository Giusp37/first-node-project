// somma e media
const arr=[1,2,3,4,5];
let sum=0;
for (let num of arr){
    sum +=num;
}

const med = sum / arr.length;

console.log('somma = '+ sum);
console.log('media = '+ med);