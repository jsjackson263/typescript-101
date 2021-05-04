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



