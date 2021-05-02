"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome back!';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "Typescript";
var isBeginner = true;
var total = 0;
var name = 'Jack';
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
//declaring an array type - 2 syntaxes:
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple:
var person1 = ['Chris', 22];
console.log(person1);
//enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log('Color is:', c); //not printing
//any type:
var randomValue = 10;
randomValue = true; // doesn't throw error
randomValue = 'Jack';
var variable = 10;
console.log(variable.name);
//unknown type:
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(variable.name);
}
//(myVariable as string).toUpperCase(); //type casting
//type inference (reminder: specifying type is optional)
var a;
a = 10;
a = true;
var b = 20; //when a variable is intialized at declaration, the type is inferred
//b = true;  error!
//Union of types (for the same variable):
var multiType;
multiType = 20;
multiType = true;
//Functions:
//the JavaScript way:
function addjs(num1, num2) {
    return num1 + num2;
}
console.log('JS:', addjs(5, 10));
//typescript
function addts(num1, num2) {
    return num1 + num2;
}
console.log('TS:', addts(5, 10));
console.log('TS:', addts(45, 50));
//optional parameters:
function addts2(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log('TS2 Optional:', addts2(5));
//default parameters:
function addts3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log('TS3 Default:', addts3(5, 25));
console.log('TS3 Default:', addts3(5));
//Interfaces:
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
fullName(p);
//Classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Bruce');
emp1.greet();
//inheritence
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this; //call the base class constructor
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Manager Jack');
m1.delegateWork();
m1.greet();
