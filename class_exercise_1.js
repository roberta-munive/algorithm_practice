// - Capitalize: Given a string, capitalize the first letter of each word in the sentence ex: "the man in spain is red" -> "The Man In Spain Is Red"

// - ::Bonus:: Exclude words like in, of, and, the (if not the first word of the title)

// - isPalindrome

function capitalize_each_word(str){
    result = str.split(" ");
    console.log(result);

    for(var i = 0; i < result.length; i++){
        result[i] = result[i][0].toUpperCase() + result[i].substring(1);
    }

    result = result.join(" ");

    console.log(result)
}

capitalize_each_word("the man in spain");