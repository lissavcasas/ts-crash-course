//Union Types: Define multiple types in a variable

var unionType: string | number;
unionType=1;
unionType='hi';

// Type Guards: It's an expression that performs a check on our type and garantees that type within its scope 

/* function addWithUnion(arg1: string | number, arg2:string | number) {
  return arg1;
}
 */


/*  function addWithTypeGuard(arg1: string | number, arg2:string | number): string | number {
  return arg1.toString() + arg2.toString();
} */


function addWithTypeGuard(arg1: string | number, arg2:string | number): string | number {
  if (typeof arg1 === 'string') {
    console.log('First argument is a string');
    return arg1 + arg2;
  }
  if (typeof arg1 === 'number' && typeof arg2 === 'number') {
    console.log('Both arguments are numbers');
    return arg1 + arg2;
  }
  return arg1.toString() + arg2.toString();
}

console.log(addWithTypeGuard('3','1'))

// Type Aliases (similar to a constant (const))

type StringOrNumber = string | number;

function addWithAlias(arg1: StringOrNumber, arg2: StringOrNumber) {
  return arg1.toString() + arg2.toString();
}

//Null and Undefined

function testUndef(test:null | number) {
  console.log('test parameter: ', test);
}

testUndef(5);
testUndef(undefined);
testUndef(null);

//In Js, if a variable is declared but not assigned value, it will return undefined
//null is a keyword
//undefined significa nada, pero absolutamente nada. Es la forma que tiene Js para decir que algo no existe o no encontró el valor.
//null en cambio, es algo, que significa vacío.
