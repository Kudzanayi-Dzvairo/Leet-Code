//Implenemtn Debounce


function debounce(time, fn) {
    let setTimeoutId;

    return function() {
    if (setTimeoutId){
        clearTimeout(setTimeoutId)
        //if you want to throttle just return
        //this will let the time run out
    }
    
   setTimeoutId = setTimeout(()=> {
        fn.apply(this, arguments)
        setTimeoutId = null
    }, time)

    }
}