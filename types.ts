/* DECLARE VARIABLES*/
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/* let strArr: string[]; 
let numArr: number[];
let booArr:boolean[]; */

let strArr: Array<string>;
let numArr: Array<number>;
let booArr: Array<boolean>;

let strNumTuple: [string, number];
let myVoid: void;
let myNull: null;
let myUndefined: undefined;

/* ASSIGN VALUES */
myString = 'Hello Wolrd'.slice(0,3); //Hel
myNum = 5.5 + 5;
myBool = true;
myVar = 5;

strArr = ['Marilyn','Melissa'];
numArr = [1,2,3,4];
booArr = [true, false, true];

strNumTuple = ['Hello', 4];
myVoid = undefined; //null
myNull = null;
myUndefined =  undefined;


console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(myVar);
console.log(strArr);
console.log(numArr);
console.log(booArr);
console.log(strNumTuple);
console.log(myVoid);
console.log(myNull);
console.log(myUndefined);
