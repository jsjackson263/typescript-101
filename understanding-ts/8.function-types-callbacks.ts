function addNumber(n1:number, n2:number) {
    return n1 + n2; //return type inferred
}

function add2(n1:number, n2:number) : number {
    return n1 + n2;
}

function addString(n1:number, n2: number) {
    return n1.toString() + n2.toString(); //return type inferred
}
    

function printResult(num: number) {  //return type 'void'
    console.log('Result: ' + num);
}

printResult(addNumber(5, 12)); 
console.log(printResult(addNumber(5, 12)));  //undefined (because it doesn't return anything)


//Functions as Types:
let combineValues: Function;
combineValues = addNumber; //pointer to a function
console.log(combineValues);
console.log(combineValues(8, 8));

combineValues = addString; 
console.log(combineValues('Hello', ' World'));

//Lambda notation:
let combineValues2: (a: number, b: number) => number;
combineValues2 = addNumber;
console.log(combineValues2(45, 55));


//Callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
});
