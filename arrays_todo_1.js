/* Push Front
    Given an array and an additional value, insert this value at the beginning of the array. You may use push(), you are able to do this without it though

    Examples:

    pushFront([5,7,2,3], 8) => [8,5,7,2,3]
    pushFront([99], 7) => [7,99]
*/

console.log("\n*****Push Front*****\n");

function pushFront(arr, value_to_insert){
    for (var i=arr.length-1; i>=0; i--){
      arr[i+1] = arr[i];
    }
    arr[0] = value_to_insert;
    return arr;
  }
  
let test_array = [5,7,2,3];
console.log("Original array ->", test_array);
pushFront(test_array, 8);
console.log("Updated array ->", test_array);

test_array = [99];
console.log("Original array ->", test_array);  
pushFront(test_array, 7);
console.log("Updated array ->", test_array);

test_array = [];
console.log("Original array ->", test_array);  
pushFront(test_array, 10);
console.log("Updated array ->", test_array);


/* Pop Front
  Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

  Examples:

  popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
  popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
*/

console.log("\n*****Pop Front*****\n");

function popFront(arr){

  if (arr.length === 0){
    console.log("Original array ->", arr);
    console.log("Empty array -> cannot pop an element")
    return null;
  }

  let value_to_return = arr[0];
  console.log("Original array ->", arr);
  for (var i=0; i < arr.length-1; i++ ){
    arr[i] = arr[i+1];
  }
  
  arr.length = arr.length - 1;
  console.log("Updated array ->", arr);
  return value_to_return;
}
test_array = [0,5,10,15];
let returned_value = popFront(test_array);
console.log(`Returned value -> ${returned_value}`);

test_array = [4,5,7,9];
returned_value = popFront(test_array);
console.log(`Returned value -> ${returned_value}`);

test_array = [];
returned_value = popFront(test_array);
console.log(`Returned value -> ${returned_value}`);

console.log("\n*****Insert At*****\n");

/* 
  Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

  Examples:

  insertAt([100,200,5], 2, 311) => [100,200,311,5]
  insertAt([9,33,7], 1, 42) => [9,42,33,7]
*/

function insertAt(arr, index_to_insert, value_to_insert){
  for (var i = arr.length - 1; i >= index_to_insert; i--){
    arr[i+1] = arr[i];
  }
  arr[index_to_insert] = value_to_insert;
  return arr;
}  
test_array = [100,200,5];
console.log("Original array ->", test_array);
insertAt(test_array, 2, 311);
console.log("Updated array ->", test_array);

test_array = [9,33,7];
console.log("Original array ->", test_array);
insertAt(test_array, 1, 42);
console.log("Updated array ->", test_array);

test_array = [];
console.log("Original array ->", test_array);
insertAt(test_array, 3, 42);
console.log("Updated array ->", test_array);

test_array = [];
console.log("Original array ->", test_array);
insertAt(test_array, 0, 42);
console.log("Updated array ->", test_array);

console.log("\n*****Remove At*****\n");

/* 
  Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

  Examples:

  removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
  removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function
*/

function removeAt(arr, index_to_remove){

  if (arr.length - 1 < index_to_remove){
    console.log(`Cannot remove an element from index ${index_to_remove}`);
    return null;
  }

  let value_to_return = arr[index_to_remove];

  for(var i = index_to_remove; i < arr.length; i++){
    arr[i] = arr[i+1];
  }
  // arr.pop();
  arr.length = arr.length - 1;

  return value_to_return;
}

test_array = [80, 20];
console.log("Original array ->", test_array);
returned_value = removeAt(test_array, 3);
console.log("Updated array ->", test_array);
console.log(`Returned value -> ${returned_value}`);

test_array = [];
console.log("Original array ->", test_array);
returned_value = removeAt(test_array, 3);
console.log("Updated array ->", test_array);
console.log(`Returned value -> ${returned_value}`);

test_array = [1000,3,204,77];
console.log("Original array ->", test_array);
returned_value = removeAt(test_array, 1);
console.log("Updated array ->", test_array);
console.log(`Returned value -> ${returned_value}`);

test_array = [8,20,55,44,98];
console.log("Original array ->", test_array);
returned_value = removeAt(test_array, 3);
console.log("Updated array ->", test_array);
console.log(`Returned value -> ${returned_value}`);

console.log("\n*****Swap Pairs*****\n");
/* 
  Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

  Examples:

  insertAt([1,2,3,4]) => [2,1,4,3]
  insertAt(["Brendan",true,42]) => [true,"Brendan",42]
*/

function swapPairs(arr){
  if (arr.length === 0)
    return arr;

  for (var i = 0; i < arr.length - 1; i+=2){
    if (arr.length % 2 !== 0 && i === arr.length-1){
      return;
    }
    let temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
  }
  return arr;
}

test_array = [];
console.log("Original array ->", test_array);
swapPairs(test_array);
console.log("Updated array ->", test_array);

test_array = [1,2,3,4];
console.log("Original array ->", test_array);
swapPairs(test_array);
console.log("Updated array ->", test_array);

test_array = ["Brendan",true,42];
console.log("Original array ->", test_array);
swapPairs(test_array);
console.log("Updated array ->", test_array);

console.log("\n*****Swap Pairs*****\n");
/* 
  Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

  Examples:

  removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
  removeDupes([9,19,19,19,19,19,29]) => [9,19,29]
*/

console.log("\n*****Remove Duplicates*****\n");

function removeDuplicates(arr){
  if (arr.length < 2){
    return arr;
  }

  for (i = arr.length; i >= 0; i--){
    
    if (arr[i] === arr[i-1]){
      removeAt(arr,i);
    }
  }
  return arr;
}

test_array = [-2,-2,3.14,5,5,10];
console.log("Original array ->", test_array);
removeDuplicates(test_array);
console.log("Updated array ->", test_array);

test_array = [9, 19, 19, 19, 19, 19, 29];
console.log("Original array ->", test_array);
removeDuplicates(test_array);
console.log("Updated array ->", test_array);