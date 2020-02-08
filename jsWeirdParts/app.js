function b(){
  console.log(myVar)
}

function a(){
    var myVar = 3
    b()
}

var myVar = 1;
a()