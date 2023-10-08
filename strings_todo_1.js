/* 
    Remove Blanks

    Create a function that, given a string, returns all of that string’s contents, but without blanks. 

    Examples:

    removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
    removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
*/

console.log("\n********Remove Blanks********\n");

function removeBlanks (str){
    let string_without_blanks = "";
    for (i = 0; i < str.length; i++){
        if(str[i] != " "){
            string_without_blanks += str[i];
        }
    }

    //alternative solution:
    // for(let char in str){
    //     if(str[char] != " "){
    //         string_without_blanks += str[char]
    //     }
    // }

    return string_without_blanks;

    // str_array = str.split(" ");
    // str_without_blanks = str_array.join("");
    // return str_without_blanks
}

let test_string = " Pl ayTha tF u nkyM usi c ";

console.log ("original string -> ", test_string);
let updated_string = removeBlanks(test_string);
console.log (`updated string -> ${updated_string}`);

test_string = "I can not BELIEVE it's not BUTTER";
console.log ("original string -> ", test_string);
updated_string = removeBlanks(test_string);
console.log (`updated string -> ${updated_string}`);

test_string = "";
console.log ("original string -> (empty string) ", test_string);
updated_string = removeBlanks(test_string);
console.log (`updated string -> ${updated_string}`);

test_string = " ";
console.log ("original string (one space) -> ", test_string);
updated_string = removeBlanks(test_string);
console.log (`updated string -> ${updated_string}`);



/*
    Get Digits
    Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

    Examples:

    getDigits("abc8c0d1ngd0j0!8") => 801008

    getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
*/

console.log("\n********Get Digits********\n");

function getDigits(str){

    // if the string is empty or there is only whitespace, we don't want a zero to be printed out
    // isNaN("") returns false and Number(isNaN("")) returns 0

    if(Number.isNaN(str) || Number(isNaN(str)) === 0){
        return "";
    }

    let digit_str = "";
    for (var i = 0; i < str.length; i++){
        

        if (!isNaN(str[i])){
            digit_str += str[i];
        }
    }
    let integer_result = Number(digit_str);
    return integer_result;
}


test_string = "abc8c0d1ngd0j0!8";
console.log ("original string -> ", test_string);
integer_result = getDigits(test_string);
console.log (`integer result -> ${integer_result}`);
console.log("Datatype of result ->", typeof(integer_result));

test_string = "0s1a3y5w7h9a2t4?6!8?0";
console.log ("original string -> ", test_string);
integer_result = getDigits(test_string);
console.log (`integer result -> ${integer_result}`);
console.log("Datatype of result ->", typeof(integer_result));

test_string = "";
console.log ("original string (empty string) -> ", test_string);
integer_result = getDigits(test_string);
console.log (`integer result -> ${integer_result}`);
console.log("Datatype of result ->", typeof(integer_result));

test_string = " ";
console.log ("original string (one space) -> ", test_string);
integer_result = getDigits(test_string);
console.log (`integer result -> ${integer_result}`);
console.log("Datatype of result ->", typeof(integer_result));

test_string = "        ";
console.log ("original string (multiple spaces) -> ", test_string);
integer_result = getDigits(test_string);
console.log (`integer result -> ${integer_result}`);
console.log("Datatype of result ->", typeof(integer_result));

/* 
    Acronyms
        Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

        acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

        acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
*/

console.log("\n********Acronymns********\n");

function acronym (str){
    let acronym_str = "";
    let str_array = str.split(" ");
    for (var i = 0; i < str_array.length; i++){
        if (str_array[i])
            acronym_str+= str_array[i][0].toUpperCase();
    }
    return acronym_str;
}

test_string = " there's no free lunch - gotta pay yer way. ";
console.log ("original string -> ", test_string);
let acronym_str = acronym(test_string);
console.log (`updated string -> ${acronym_str}`);

test_string = "Live from New York, it's Saturday Night!";
console.log ("original string -> ", test_string);
acronym_str = acronym(test_string);
console.log (`updated string -> ${acronym_str}`);

test_string = "";
console.log ("original string (empty string)-> ", test_string);
acronym_str = acronym(test_string);
console.log (`updated string -> ${acronym_str}`);

test_string = " ";
console.log ("original string (one space)-> ", test_string);
acronym_str = acronym(test_string);
console.log (`updated string -> ${acronym_str}`);



/* 
    Count Non-Spaces
    Create a function that, given a string, returns the number of non-space characters found in the string. 

    Examples:

    countNonSpaces("Honey pie, you are driving me crazy") => 29
    countNonSpaces("Hello world !") => 11
*/

console.log("\n********Count Non-Spaces********\n");

function countNonSpaces(str){

    // let str_array = str.split(" ");
    // let string_without_spaces = str_array.join("");
    // return string_without_spaces.length;

    let string_without_spaces = "";

    for (var i = 0; i < str.length; i++){
        if(str[i] != " "){
            string_without_spaces += str[i];
        }
    }

    //alternative solution:
    // let char_counter = 0;
    // for (char in str){
    //     if (str[char] != " "){
    //         char_counter += 1;
    //     }
    // }
    // return char_counter;

    return string_without_spaces.length;
}

test_string = "Honey pie, you are driving me crazy";
console.log ("original string -> ", test_string);
acronym_str = countNonSpaces(test_string);
console.log (`number of non-space characters -> ${acronym_str}`);

test_string = "Hello world !";
console.log ("original string -> ", test_string);
acronym_str = countNonSpaces(test_string);
console.log (`number of non-space characters -> ${acronym_str}`);

test_string = "";
console.log ("original string (empty string)-> ", test_string);
acronym_str = countNonSpaces(test_string);
console.log (`number of non-space characters -> ${acronym_str}`);

test_string = " ";
console.log ("original string (one space)-> ", test_string);
acronym_str = countNonSpaces(test_string);
console.log (`number of non-space characters -> ${acronym_str}`);

/* 
    Remove Shorter Strings
    Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

    Examples:

    removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
    removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']
*/

console.log("\n********Remove Shorter Strings********\n");

function removeShorterStrings (arr_of_strings, threshold_number){

    let strings_to_keep_array = [];
    strings_to_keep_array.length = arr_of_strings.length;
    let num_of_strings_kept = 0;

    for (var i = 0; i < arr_of_strings.length; i++){

        
        if(arr_of_strings[i].length >= threshold_number){

            num_of_strings_kept+= 1; 
            strings_to_keep_array[num_of_strings_kept - 1] = arr_of_strings[i];
        }
    }

    //alternative solution:
    // let nextIndex = 0;
    // for(var index in arr_of_strings){
    //     if(arr_of_strings[index].length >= threshold_number){
    //         strings_to_keep_array[nextIndex] = arr_of_strings[index];
    //         nextIndex += 1;
    //     }
    // }

    console.log("num of strings removed -> ", arr_of_strings.length - num_of_strings_kept);
    strings_to_keep_array.length = num_of_strings_kept;
    
    return strings_to_keep_array;
}

test_array = ['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'];
console.log ("original array -> ", test_array);
updated_array = removeShorterStrings(test_array, 4);
console.log ("updated array -> ", updated_array);


test_array = ['There', 'is', 'a', 'bug', 'in', 'the', 'system'];
console.log ("original array -> ", test_array);
updated_array = removeShorterStrings(test_array, 3);
console.log ("updated array -> ", updated_array);

test_array = [];
console.log ("original array -> ", test_array);
updated_array = removeShorterStrings(test_array, 4);
console.log ("updated array -> ", updated_array);

test_array = ["hi"];
console.log ("original array -> ", test_array);
updated_array = removeShorterStrings(test_array, 4);
console.log ("updated array -> ", updated_array);

test_array = ["pickle"];
console.log ("original array -> ", test_array);
updated_array = removeShorterStrings(test_array, 4);
console.log ("updated array -> ", updated_array);


test_array = ["hi", "pickle"];
console.log ("original array -> ", test_array);
updated_array = removeShorterStrings(test_array, 4);
console.log ("updated array -> ", updated_array);

test_array = ["pickle", "hi"];
console.log ("original array -> ", test_array);
updated_array = removeShorterStrings(test_array, 4);
console.log ("updated array -> ", updated_array);

test_array = ["the", "hi"];
console.log ("original array -> ", test_array);
updated_array = removeShorterStrings(test_array, 4);
console.log ("updated array -> ", updated_array);
