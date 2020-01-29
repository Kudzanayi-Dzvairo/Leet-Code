function pair(str){
    str = str.toUpperCase()
    //changes strign to uppercase for simple checking 
    str = str.split("");
    //breaks string up into a character array 
    var placeholderArray = [];
    //empty array to be added to 
    for(var i= 0; i < str.length; i++){
        //Loop to iterate through character array
        if(str[i] === "G"){
            //checks current character and if equal
            placeholderArray.push( ["G", "C"])
            //adds to place the corresponding DNA pair
        }else if (str[i] === "C"){
            placeholderArray.push( ["C", "G"])
        }else if (str[i] === "A"){
            placeholderArray.push( ["A", "T"])
        }else if(str[i]=== "T"){
            placeholderArray.push( ["T", "A"])
        }
    }

    str = placeholderArray
    return str 
}