
let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level; // this is any for typeScript


function render(document: any){
    console.log(document);
}

// ------------- Arrays, types, tuples, enums ----->

let numbers1: any[] = [] // This array is of type any
let names: string[] = ["Testy", "Period"] // this array only accept string
let user: [number, string] = [1, 'Zak'] // This a kind of tuple with key value pairs
const enum Size {Small, Medium, Large} // An enum

//---------- Functions---->

function calculateTax(income: number): number {
    return income * 1.2;
}

//---------- Objects ---->

let employee = {
    id: 1,
    name: "Zak"
};
