/* Type Annotation */
let lastname = 'Casas';
let hobby = ['watch anime', true, 666];
let a = 'abc';
let height = 160;
let names = ['mari', 'meli', 'marimeli', 6]; //Array<any> 
let numbers = [1, 2, 3];
let booleans = [true, false, true];
/* Types */
//Tuple: express an array with the type of a fixed number of elements is known
let tupleTest = ['meli', 4, true];
var DoorStats;
(function (DoorStats) {
    DoorStats[DoorStats["Open"] = 0] = "Open";
    DoorStats[DoorStats["Closes"] = 1] = "Closes";
    DoorStats[DoorStats["Ajar"] = 2] = "Ajar";
})(DoorStats || (DoorStats = {}));
//console.log(DoorStats.Open); // 0
//We use void when we don't expect anything to return
function log(val) {
    console.log('val', val);
}
//log(DoorStats.Open); // O
//log(DoorStats[0]); // Open
function tellJokes() {
    return 'this is a joke';
}
log(tellJokes());
