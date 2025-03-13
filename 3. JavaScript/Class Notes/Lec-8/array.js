//? Ways to create array.
let arr = [2, 35, 1, "Madhur", true, { id: 2, name: "Marco" }];
console.log(arr);

//? To find the length or know that how many elements are presented in array.
console.log(arr.length);

//? To access any element.
console.log(arr[3]);

//? To modify any element.
arr[3] = "Madhur Purohit";
console.log(arr);

//? at():- It will also use to access any element in array, but it will take negative index also.
console.log(arr.at(8)); // If index doesn't exist than it will give undefined as an output.
console.log(arr.at(3));
console.log(arr.at(-4));

let newArr = arr; // It will point to the same address that arr points.
console.log(newArr == arr);
console.log(newArr);

//? But if we want to create an separate copy of arr into newArr, & they both point to different location. than we use:-
let arr2 = structuredClone(arr);
console.log(arr2);
console.log(arr2 == arr);

//* How to insert/add or delete an element in array.
console.log("\nInsert or delete an element at the end of tha array.");

let arr1 = [2, 35, 1, "Madhur", true];
//? push():- This will add one or more elements to the end of an array. It will return the new length array.
arr1.push(40);
console.log(arr1);
console.log(arr1.push(30));
console.log(arr1);

//? pop():- This will delete or remove last element from an array. the pop() method return the element which is deleted.
arr1.pop();
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

console.log("\nInsert or delete an element at the beginning of tha array.");
//? unshift():- It will add one or more element at the beginning of the array.
arr1.unshift("Purohit");
console.log(arr1);
console.log(arr1.unshift(90)); // It will give the new length of array.
console.log(arr1);

//? shift():- It will remove the first element or remove an element from beginning of the array.
arr1.shift();
console.log(arr1);
console.log(arr1.shift()); // It will give the deleted element.
console.log(arr1);

//? delete:- It will delete an specific index value, but the space remains same/reversed.
// delete arr1[0];
// console.log(arr1);

console.log("\nSearching element in an array.");

//* Searching in Array.
let searchArr = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
//? indexOf(X):- It will return the index of first occurrence of X, if it doesn't exist than return -1.
console.log(searchArr.indexOf(6));
console.log(searchArr.indexOf(2));

//? lastIndexOf(X):- It will return the index of last occurrence of X, if it doesn't exist than return -1. This will search in backward direction means from end/last index to first/starting index.
console.log(searchArr.lastIndexOf(6));
console.log(searchArr.lastIndexOf(8));

//? includes(X):- It will return true if X is present in array, otherwise return false.
console.log(searchArr.includes(6));
console.log(searchArr.includes(-14));

//* Extract an part of array.
//? slice():- Extract a portion of the array without modifying it. In this we can also use negative index if the given index is not exist than it will print blank array. In this original array will remain same, means it will make new array & return to it.
//! Syntax:- slice(starting index, end index). In this end index is excluded.
console.log(searchArr);
console.log(searchArr.slice(1, 5));
console.log(searchArr.slice(1, -1));
console.log(searchArr.slice(1, 13));

//* Modifying an array.
//? splice():- This method in JS is a powerful method used for modifying an array by adding, removing or replacing elements.
//! Syntax:- splice(starting index, delete count, item1, item2, item3 .....) Here delete count means how many element we want to delete from starting index. It will also include starting index.
console.log(searchArr.splice(1, 4)); // It will give the element's which has been deleted. & this will also apply on original array means it will modify original array.
console.log(searchArr);

console.log(searchArr.splice(1, 2, 23, 24, 25)); // It will delete index[1] & index[2], because it start's from index[1] & delete 2 index. After that it will add 23, 24, 25 from index[1].
console.log(searchArr);

console.log(searchArr.splice(3, 0, "Madhur")); // It will print blank array, because in this no element has been deleted.
console.log(searchArr);

let newSplice = searchArr.splice(1, 4); // It will copied the element which has been deleted from array, & copied in newSplice. & also modified the original array.
console.log(newSplice);
console.log(searchArr);

//? toString():- This will converts an array to a string of (Comma separated) array values.
console.log(searchArr.toString());
console.log(typeof searchArr.toString());

//? join():- This method also joins all the array elements into a string. In this if we wrote anything inside () than the new string is separated which has been written inside () & if we not write anything inside () than new string is separated with comma.
console.log(searchArr.join());
console.log(searchArr.join("/"));
console.log(searchArr.join("S"));

//? concat():- This method creates a new array by merging (concatenating) existing arrays.
arr1 = [2, 3, 4, 11, 12];
arr2 = [9, 1, 0, 19, 25];
let arr3 = arr1.concat(arr2);
console.log(arr3);

//todo How to add an array into another array in 2-D array formate.
arr1.push(arr2);
console.log(arr1);

console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[5][2]);

//* How to create 2-D Array.
let arr2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr2d);

console.log(arr2d[0]);
console.log(arr2d[0][2]);

//* How to create 3-D Array.
let arr3d = [
  [1, 2, [4, 5]],
  [6, 7, 8],
];
console.log(arr3d);
console.log(arr3d[0]);
console.log(arr3d[0][2]);
console.log(arr3d[0][2][1]);

//* How to convert 2-D Array into 1-D Array.
//? flat(X):- This method creates a new array with sub-array elements concatenated to a specified depth. In this X will be 1 by default but if we want to convert 3d array into 1d array than we wrote 2 in place of X & so on.
console.log(arr2d.flat()); // It will convert the 2d array into 1d array & give a new array, & existing or original array remains same.

let convert2dto1d = arr2d.flat();
console.log(convert2dto1d);

//? Convert 3d array to 2d array.
console.log(arr3d.flat());

//? Convert 3d array to 1d array.
console.log(arr3d.flat(2));
console.log(arr3d.flat(Infinity));

//* How to know that given variable is array or not. In this we use Array object.
let abc = [2, 3, 4];
console.log(Array.isArray(abc));

let a = 12;
console.log(Array.isArray(a));

//* Another method to create array but it is not recommended & used.
let ac = new Array(2, 123, 456);
console.log(ac);

//! If we give only one value in that case it will create an empty array of size which is equal to that value.
let ac1 = new Array(10);
console.log(ac1);
