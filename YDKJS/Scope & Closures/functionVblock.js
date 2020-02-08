var a = 2
function foo(a){
    var a = 3 
    console.log(a)
}
foo()
console.log(a)

(function foo(){
    var a = 3 
    console.log(a)
})()

console.log(a)