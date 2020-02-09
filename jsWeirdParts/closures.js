// function greet(){
     
//     return function(name) {
//         console.log(whattosay + ' ' + name)
//     }
// }

// var sayHi = greet('Hi')
// sayHi('Tony')

function buildFunctions(){
     var arr = []

     for(var i =0; i < 3; i++){
         let j = i 
         arr.push(function (){
             console.log(j)
         })
     }
     
     return arr
}

var fa = buildFunctions()

fa[0]()
fa[1]()
fa[2]()