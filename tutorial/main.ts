export {}
let message = 'Welcome back!'
console.log(message)

let x = 10;
const y = 20;

let sum;
const title = "Typescript";

let isBeginner : boolean = true;
let total: number = 0;
let name:string = 'Jack';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`
console.log(sentence)

let n: null = null;
let u : undefined = undefined

let isNew: boolean = null;
let myName: string = undefined;

//declaring an array type - 2 syntaxes:
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//tuple:
let person1: [string, number] = ['Chris', 22];
console.log(person1);

//enum type
enum Color {Red=5, Green, Blue};

let c:Color = Color.Green;
console.log('Color is:', c); //not printing

//any type:
let randomValue: any = 10;
randomValue = true; // doesn't throw error
randomValue = 'Jack';

let variable: any = 10; 
console.log(variable.name);

//unknown type:
let myVariable: unknown = 10;

function hasName(obj: any): obj is {name: string} {
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}

if (hasName(myVariable)) {
    console.log(variable.name);

}
//(myVariable as string).toUpperCase(); //type casting


//type inference (reminder: specifying type is optional)
let a;
a = 10;
a = true;

let b = 20; //when a variable is intialized at declaration, the type is inferred
//b = true;  error!


//Union of types (for the same variable):
let multiType: number | boolean;
multiType = 20;
multiType = true;


//Functions:

//the JavaScript way:
function addjs(num1, num2) {
    return num1 + num2;
}
console.log('JS:', addjs(5, 10))

//typescript
function addts(num1: number, num2: number): number {
    return num1 + num2;
}
console.log('TS:', addts(5, 10))
console.log('TS:', addts(45, 50))

//optional parameters:
function addts2(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2;
   else
        return num1;
}
console.log('TS2 Optional:', addts2(5))


//default parameters:
function addts3(num1: number, num2: number = 10): number {
    if (num2)
        return num1 + num2;
   else
        return num1;
}
console.log('TS3 Default:', addts3(5, 25))
console.log('TS3 Default:', addts3(5))


//Interfaces:
function fullName(person: {firstName: string, lastName: string}) {  //what if we had many parameters?
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);


interface Person {
    firstName: string;
    lastName: string;
}

function fullName2(person: Person) {  
    console.log(`${person.firstName} ${person.lastName}`)
}
fullName(p);


//Classes
class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee('Bruce');
emp1.greet();


//inheritence
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName)  //call the base class constructor
    }

    delegateWork() {
        console.log(`Manager delegating tasks`);

    }
}

let m1 = new Manager('Manager Jack');
m1.delegateWork();
m1.greet();


