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

console.log(greeting('Giuseppe', 'it'));
console.log(greeting('Joseph', 'en'));
console.log(greeting('Pablo', 'es'));
console.log(greeting('Marco'));

console.log('random number between 1 and 10', random(1,10));
