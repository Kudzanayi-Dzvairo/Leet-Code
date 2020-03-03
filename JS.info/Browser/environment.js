function sayHi(){
    console.log("Hello")
}

window.sayHi();

//change the background color to red 

document.body.style.background = 'red'

//change it back after 1 second 
setTimeout(() => document.body.style.background = "", 1000)

//BOM 

console.log(location.href)//shows current URL
if(confirm("Go to Wikipedia?")){
    location.href = "http://wikipedia.org" //redirect the browser to another
}
