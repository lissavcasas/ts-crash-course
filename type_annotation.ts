/* Type Annotation */

let lastname: string = 'Casas';
let hobby:any = ['watch anime', true, 666];
let a: string = 'abc';
let height:number = 160;
let names : any[]= ['mari', 'meli','marimeli',6]; //Array<any> 
let numbers : number[] = [1,2,3];
let booleans : boolean[] = [true,false,true];

/* Types */

//Tuple: express an array with the type of a fixed number of elements is known
let tupleTest: [string, number, boolean] = ['meli', 4, true];

enum DoorStats {
  Open,
  Closes,
  Ajar
}

//console.log(DoorStats.Open); // 0

//We use void when we don't expect anything to return
function log(val:any):void {
  console.log('val', val);
}
//log(DoorStats.Open); // O
//log(DoorStats[0]); // Open

function tellJokes():string{
  return 'this is a joke';
}

log(tellJokes());