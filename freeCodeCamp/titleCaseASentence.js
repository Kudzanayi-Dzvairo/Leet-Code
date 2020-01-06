//Return the provided string with the first letter of each word capitalized. 
//Make sure the rest of the word is in lower case.

function titleCase(str){
    //convert all characters to lowercase and convert string to array
    let convertToArray = str.toLowerCase().split(' ');
    //map array to new array to be returend
    var result = convertToArray.map((val) =>{
    //replace the character at index 0 of each str element with a capital 
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    })

    //join array elements into str
    return result.join(' ');
}

console.log(titleCase("I'm a little tea pot"))