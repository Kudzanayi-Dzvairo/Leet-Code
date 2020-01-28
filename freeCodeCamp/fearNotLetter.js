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