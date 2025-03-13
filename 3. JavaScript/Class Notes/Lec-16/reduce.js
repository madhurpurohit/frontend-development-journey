//* Reduce Method:- This method is used to accumulate or reduce an array to a single value. It iterates over the elements of an array.
/* Syntax:- const/let vName= arrayName.reduce((accumulator, currentValue, index, newArrayName)=>{
                                    Code here.
                                    Return the updated accumulator value.
                            }, initiaLValue);
*/
const arr = [10, 20, 30, 40, 50, 60];

// const result = arr.reduce((acc, cur, index, newArray) => acc+cur, 0);

const result = arr.reduce((accumulator, currentValue, index, newArray) => {
  console.log(
    `Accumulator value: ${accumulator}\t & Current value: ${currentValue}`
  );

  accumulator += currentValue;
  return accumulator;
}, 0);

console.log(result);

//todo We have an array with duplicate item name, & we have to return an object with item name & it's quantity(repeat count).
let item = [
  "orange",
  "apple",
  "banana",
  "orange",
  "apple",
  "banana",
  "orange",
  "grapes",
];

const answer = item.reduce((acc, cur) => {
  if (acc.hasOwnProperty(cur)) acc[cur]++;
  else acc[cur] = 1;

  return acc;
}, {});

console.log(answer);

const answer1 = item.reduce(
  (acc, cur) => {
    if (acc.hasOwnProperty(cur)) acc[cur]++;
    else acc[cur] = 1;

    return acc;
  },
  { orange: 2, apple: 1 }
);

console.log(answer1);
