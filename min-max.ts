const arrMinMax=[3,2,1,5,4,12,-1,5];

const minimo = (arr: number[]): number => {
    let min = arr[0];
    for (let n of arr){
        if (n<min){
            min=n;
        }
    }
    return min;
    
}
const massimo = (arr: number[]): number => {
    let max = arr[0];
    for (let n of arr){
        if (n>max){
            max=n;
        }
    }
    return max;
    
}
console.log('min ='+minimo(arrMinMax));
console.log('max ='+massimo(arrMinMax));