function getSum(num1: number, num2: number): number {
  return num1 + num2;
};
//console.log(getSum(1,4));

let mySum = function (num1: any, num2: any): number {
  if (typeof num1 == 'string') {
    num1 = parseInt(num1);
  }
  if (typeof num2 == 'string') {
    num2 = parseInt(num2);
  }
  return num1 + num2
};
console.log(mySum('3', 5))

// ? symbol makes the parameter optional
function getName(firstname: string, lastname?: string): string {
  if (lastname == undefined) {
    return firstname;
  }
  return firstname + ' ' + lastname;
};

console.log(getName('John'));

//void returns anything at all
/* function myVoid():void{
  return ;
}; */