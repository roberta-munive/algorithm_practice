
// unshift adds a value to the beginning of an array

function my_unshift(arr, value_to_add){
    for(i = arr.length-1; i >= 0; i--){
        arr[i+1] = arr[i];
    }
    arr[0] = value_to_add;
    return arr;
}

let test_array = [1, 2, 3, 4, 5];
result = my_unshift(test_array, 8);
console.log(result);

let test_array_2 = [];
result = my_unshift(test_array_2, 8);
console.log(result);


// shift removes the first element of an array and returns the value

function my_shift(arr){
    if (arr.length === 0){
        return null;
    }
    first_element = arr[0];
    for (i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length = arr.length - 1;
    return first_element;
}

result = my_shift(test_array);
console.log(result);
console.log(test_array);

test_array_2 = [];

result = my_shift(test_array_2);
console.log(result);
console.log(test_array_2);
