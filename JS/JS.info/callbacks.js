function loadScript(src){
    //creates a <script> tag and append it to  the page
    //this causes the script with given src to start loading and run when complete
    let script = document.createElement('script')
    script.scr = scr
    document.head.append(script)
}

//asyc js with a callback

function loadScript(src, callback){
    let script = document.createElement('script')
    script.src = src;

    script.onload = () => callback(script)

    document.head.append(script)
}

loadScript('/my/script.js', function () {
    
    newFunction()
})

//callback in a callback 

loadScript('/my/script.js1', function(script)  {
  
    console.log('script is loaded, lets load another')
    
    loadScript('/my/script.js2', function(script) {
        
        console.log('script is loaded2, lets load another')
           
            loadScript('/my/script.js2', function(script) {
                  
                console.log('script is loaded3, lets load another')
            })
    })
})

//Handling Errors

function loadScript(src, callback) {
    let script = document.createElement('script')
    script.src = src

    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error('SCript load error for ${src}'))
}

loadScript('/my/script.js2', function(error, script) {
    if(error){
        //handle error
    }else{
        //script loaded correctly
    }
})

//Pyramid of Doom

loadScript('1.js', function(error, script){

    if(error){
        handleError(error)
    } else {
        loadScript('2.js' function(error, script){
            if(error){
                handleError(error)
            } else{
                loadScript('3,js', function(error, script){
                    if(error){
                        handleError(error)
                    } else {
                        //...continue after all scripts are loaded 
                    }
                })
            }
        })
    }
})