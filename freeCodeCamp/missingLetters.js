function fearNotLetter(str){

    for(let i = 0; i < str.length; i++){
        //code of current character
        let code = str.charCodeAt(i)

        //if code of current character is not equal to first character + no of hence character has been escaped
        if(code !== str.charCodeAt(0) + i){
            return String.fromCharCode(code - 1)
        }
    }
    return undefined
}

function fearNotLetter2(){
    var compare = str.charCodeAt(0),
    missing;

    str.split('').map((letter, index) => {
        if(str.charCodeAt(index) === compare){
            compare++
        }else{
            missing = String.fromCharCode(compare)
        }
    })
    return missing

}

function fearNotLetter3(){
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    //create a string that stores alphabet
    alphabet= alphabet.split("")
    //split alphabet into letter character array

    str=str.split('')
    //split input string into character array

    if(str[0]!= 'a'){
        return undefined
    }
    //if our 1st leter is not an 'a' return undefined 

    for(var i=0; i <str.length; i++){
        if(str[i] !=alphabet[i]){
            return alphabet[i]
        }
    }

    return str
}