var toLowerCase = function(str) {
    var res = ''
    for (var i = 0; i < str.length; i++){
        var code = str.charCodeAt(i);
        if (code >= 65 && code < 97) {
            code += 32;
        }

        res += String.fromCharCode(code)
    }

    return res;
}

var toLowerCase = function(str) {
    
    return str.toLowerCase()
};