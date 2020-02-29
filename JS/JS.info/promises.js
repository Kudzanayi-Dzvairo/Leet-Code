let promise = new Promise(function(resolve, reject){
    //executor (the producing code, "singer")
})

let promise = new Promise(function(resolve, reject){
    //the funciton is excuted automatically when the promise is contructed

    //after the 1 second signal that the job is done with the 
    setTimeout(() => resolve("done"), 1000)
})

let promise = new Promise((resolve, reject) => {
    
    setTimeout(() => reject(new Error("whoops")), 1000)
})

//there can only be one sinlge result 

let promise = new Promise(function(resolve, reject){

    resolve('done')

    reject(new Error('Mutombo')) //ignored
    setTimeout(() => resolve("...")) //ignored
})

// .then 

promise.then(
    function(result) //{handle sucessful result}
    function(error) //{handle an error}
)

//successfully resolved promise 

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 100)
})

//resolve runs the first funct 
promise.then(
    result => alert(result) //shows done after 1 second 
    error => alert(error) // doesn't run 
)

//in the case of a rejection 

let promise = new Promise((resolve, reject) => {
    
    setTimeout(() => reject(new Error('Mutombo!')), 1000)
})

promise.then(
    result => alert(result)
    error=> alert(error) //shows "Error: Whoops!" after 1 second 
)

//if we're only interested in completions 

let promise = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000)
})

promise.then(alert) //shows done after 1 second 


//.catch 

let promise = new Promise((resolve, reject) => {

    setTimeout(() => reject(new Error("Mutombo")), 1000)
})

//.catch(f) is the same as promise.then(null, f)
promise.catch(alert)

//.finally 
new Promise((resolve, rejec) => {
    // do something that takes time and call resolve or reject
})

//runs when promise is settled, regardless of success
.finally(() => stop loading indicator)
.then(result => show result, err => show error)


//loascript function from callbacks 

function loadscript(src, callback){
    let script = document.createElement('script')
    script.src = src
    
    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error(`Mutombo pon di ${src}`))

    document.head.append(script)
}

//written with promises

function loadScript(src){
    return new Promise(resolve, reject {
        let script = document.createElement('script')
        script.src = src
        
        script.onload = () => callback(null, script)
        script.onerror = () => callback(new Error(`Mutombo pon di ${src}`))
    
        document.head.append(script)
    })
}

//usage 

let promise = loadscript('1.js')

promise.then(
    script => alert('good to go')
    error => ('Mutombo')
)

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => alert('run after 3 seconds'))