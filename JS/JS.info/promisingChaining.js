//Promise Chain
new Promise((reject, resolve) => {

    setTimeout(()=> resolve(1), 1000)

}).then( result => {

    alert(result)//1
    return result * 2

}).then( result => {

    alert(result)//2 
    return result * 2

}).then( result => {

    alert(result)// 4
    return result * 2
})

//returning promsies 

new Promise(reject, resolve {
    setTimeout(() => resolve(1), 1000)
}).then( result => {
    alert(result) //1

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000)
    })
}).then( result => {
    
    alert(result) //2 

    return(new Promise((resolve, reject) => {

        setTimeout(() => resolve(result * 2), 1000)
    })
}).then(function(result){

    alert(result) // 4
})