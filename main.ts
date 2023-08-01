console.log("Hello World!")
console.log("This is my first Node project!")

let myVar: number =3
myVar += 10 // 13
console.log("myVar = ", myVar)

interface MyInterface {
    myNumber: number;
    myString: string;
}

let myInterface: MyInterface = {
    myNumber: 10,
    myString: 'Hello world',
};
// ciao
console.log('myNumber = ', myInterface.myNumber);
console.log('myString = ', myInterface.myString);