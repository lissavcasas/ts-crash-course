//Union Types: Define multiple types in a variable
var unionType;
unionType = 1;
unionType = 'hi';
// Type Guards: It's an expression that performs a check on our type and garantees that type within its scope 
/* function addWithUnion(arg1: string | number, arg2:string | number) {
  return arg1;
}
 */
/*  function addWithTypeGuard(arg1: string | number, arg2:string | number): string | number {
  return arg1.toString() + arg2.toString();
} */
function addWithTypeGuard(arg1, arg2) {
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
console.log(addWithTypeGuard('3', '1'));