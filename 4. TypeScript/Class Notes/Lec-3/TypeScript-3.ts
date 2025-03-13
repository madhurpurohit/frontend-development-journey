//? How to add any property as optional in object.
//! Syntax:- property?:datatype,

interface Person{
    name: string,
    age: number,
    gender: string,
    account_no?:number, // Here account_no is optional.
}

const obj: Person = {
    name: "Madhur",
    age: 24,
    gender: "Male",
};

//* Utility Types for object.
//? 1. Partial<interfaceName>:- Partial means all values are become optional.
interface customer{
    name: string,
    age: number,
    balance?: number,
}

// In obj2 we can add all the property or if we don't want to add any property or any specific property than don't add any property/specific property.
const obj2: Partial<customer> = {
    name: "Madhur",
};

//? Required<interfaceName>:- It means all property are required.
const obj3: Required<customer> = {
    name: "Madhur",
    age: 24,
    balance: 4530,
};

//? Readonly<interfaceName>:- It means we can read the property only but we can't change it.
const obj4: Readonly<customer> = {
    name: "Madhur",
    age: 24,
    balance: 54000,
}

//* Array of Objects.
const arr = [{ name: "Madhur", age: 24 }, { name: "Purohit", age: 30 }]; // It will automatically infer the data type.

//! Syntax:- const/let variableName:{property:datType,...}[]=[{property:value},...];

const arr1: { name: string, age: number }[] = [{ name: "Madhur", age: 24 }, { name: "Purohit", age: 30 }];

// Or we can make interface for object.
interface people{
    name: string,
    age: number,
}

const arr2: people[] = [{ name: "Madhur", age: 24 }, { name: "Purohit", age: 25 }];

// If we have two array of object & they both have different properties than.
interface manager{
    salary: number,
    id: string,
}

const arr3: (people | manager)[] = [{ name: "madhur", age: 24 }, { salary: 2400000, id: "UN10145" }];

//* Function In TS.
/* Syntax:- function functionName(param:dataType,...):returnDataType{
                Code Here.
                return number;
            }
            
            functionName(argument);
*/
// In this the returnDataType is optional if we don't write it than it will automatically infer from the return value.

function greet(a: number): number{
    console.log(a);
    return a + 5;
}

console.log(greet(10));


function meet(msg: string, val: number) {
    console.log(msg, val);
}

meet("Madhur", 24);

//? Default Parameter:- It means if we don't give any argument than it will automatically give default value & if we give argument than it will give that argument value.

function func(msg: string = "MP"){
    console.log(msg);
}

func();
func("Madhur");

//?Optional Parameter:- If we don't want to give any argument sometimes & sometimes we want to give argument than we use optional parameter.
function Gate(person?: string) {
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

const sum = (a: number, b: number): number => {
    return a + b;
}

console.log(sum(10,15));

//* Callback function.
function placeOrder(order: number, callback:(amount:number)=>void) {
    const amount: number = order + 10;
    callback(amount);
}

placeOrder(10, (amount: number) => {
    console.log(amount);
    
});

type chill = (amount: number) => void;

function pickupOrder(order: number, deliverOrder: chill) {
    const amount: number = order * 14;
    deliverOrder(amount);
}

pickupOrder(10, (amount: number) => {
    console.log(amount);
})

//? Rest Parameter.
function total(...arr: number[]) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}

total(2, 3, 1, 4, 123, 1, 12, 10);

//? extends Keyword.
interface Human{
    name: string,
    age: number,
}

// In teacher interface it will inherit the property of Human interface.
interface Teacher extends Human{
    salary: number;
    experience: number;
    id: string;
}

const obj6: Teacher = {
    name: "Madhur",
    age: 24,
    salary: 240000,
    experience: 7,
    id: "78N45",
};

console.log(obj6);
