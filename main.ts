function greeting(name: string, lang: 'en' | 'it' | 'es' = 'it'):string {
   const greetMap =  {
    en: 'Hello',
    it: 'Ciao',
    es: 'Hola',
   };

   const greetingWorld = greetMap[lang];
 
   return (greetingWorld+' '+name);
}

const random = (min: number, max: number): number => {
    return Math.random() * (max-min)+ min;
}

const numbers: number[] =[1,2,3,4,5]

const squareNumbers= numbers.map((n) => n*n);
const oddNumbers= numbers.filter((n) => n%2 !=0);

console.log(numbers);
console.log(squareNumbers);
console.log(oddNumbers);