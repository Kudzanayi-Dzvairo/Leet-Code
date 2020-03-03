function a(){
console.log(this)
}

var b = function(){
    console.log(this)
}

b()

var c = {
    name: 'c object',
    log: function(){
        console.log(this)
    }
}

c.log()