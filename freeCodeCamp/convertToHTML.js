function convertHTML(str){

    let temp = str.split("")
    //split stings into character array

    for(var i = 0; i < temp.length; i++){
        //iterate through character array 
        switch(temp[i]){
            //check current value of character array

            //if case is met repalce with html entitiy
            case "<":
                temp[i] = "&lt;";
                break;
            case "&":
                temp[i] = "&amp;";
                break;
            case ">":
                temp[i] = "&gt;";
                break;
            case '"':
                temp[i] = "&quot;";
                break;
            case "'":
                temp[i] = "&apos;"
                break;
        }
    }

    
    temp = temp.join("")
    //join charater array back into a string 
    return temp
}

function convertHTML(str){
    const htmlEntities = {
        "&": "&amp",
        "<": "&lt",
        ">": "&gt",
        '"': "&quot",
        "'": "&apos"
    }

    return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("")
}