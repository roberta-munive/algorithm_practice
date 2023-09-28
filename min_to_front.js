function min_to_front(arr){

    let min = arr[0];
    let min_index = 0;

    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
            min_index = i;
        }
    }

    for (var i = min_index-1; i >= 0; i--){
        arr[i+1] = arr[i];
    }

    arr[0] = min;
    
    return arr;
}

let test_array = [4,2,1,3,5];
console.log("Original array ->", test_array);
min_to_front(test_array);
console.log("Updated array ->", test_array);

