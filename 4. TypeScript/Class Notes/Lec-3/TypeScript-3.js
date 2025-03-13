"use strict";
//? How to add any property as optional in object.
//! Syntax:- property?:datatype,
const obj = {
    name: "Madhur",
    age: 24,
    gender: "Male",
};
// In obj2 we can add all the property or if we don't want to add any property or any specific property than don't add any property/specific property.
const obj2 = {
    name: "Madhur",
};
//? Required<interfaceName>:- It means all property are required.
const obj3 = {
    name: "Madhur",
    age: 24,
    balance: 4530,
};
//? Readonly<interfaceName>:- It means we can read the property only but we can't change it.
const obj4 = {
    name: "Madhur",
    age: 24,
    balance: 54000,
};
//* Array of Objects.
const arr = [{ name: "Madhur", age: 24 }, { name: "Purohit", age: 30 }]; // It will automatically infer the data type.
//! Syntax:- const/let variableName:{property:datType,...}[]=[{property:value},...];
const arr1 = [{ name: "Madhur", age: 24 }, { name: "Purohit", age: 30 }];
const arr2 = [{ name: "Madhur", age: 24 }, { name: "Purohit", age: 25 }];
const arr3 = [{ name: "madhur", age: 24 }, { salary: 2400000, id: "UN10145" }];
//* Function In TS.
/* Syntax:- function functionName(param:dataType,...):returnDataType{
                Code Here.
                return number;
            }
            
            functionName(argument);
*/
// In this the returnDataType is optional if we don't write it than it will automatically infer from the return value.
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
function meet(msg, val) {
    console.log(msg, val);
}
meet("Madhur", 24);
//? Default Parameter:- It means if we don't give any argument than it will automatically give default value & if we give argument than it will give that argument value.
function func(msg = "MP") {
    console.log(msg);
}
func();
func("Madhur");
//?Optional Parameter:- If we don't want to give any argument sometimes & sometimes we want to give argument than we use optional parameter.
function Gate(person) {
    console.log(person || "MP");
}
Gate("Madhur");
Gate();
//* Fat Arrow Function.
/* Syntax:- const vName=(vName1:dataType, ....):returnDataType => {
                Code Here.
                return ;
            }
            
            vName(arg);
*/
const sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 15));
//* Callback function.
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
function pickupOrder(order, deliverOrder) {
    const amount = order * 14;
    deliverOrder(amount);
}
pickupOrder(10, (amount) => {
    console.log(amount);
});
//? Rest Parameter.
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
total(2, 3, 1, 4, 123, 1, 12, 10);
const obj6 = {
    name: "Madhur",
    age: 24,
    salary: 240000,
    experience: 7,
    id: "78N45",
};
console.log(obj6);
