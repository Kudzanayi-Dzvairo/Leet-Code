//Array destructuring


let arr = ["kudzanayi", "dzvairo"]

//destruting assignment 
//sets firstname = arr[0]
//and surname = arr[1]
// let [firstName, surname] = arr



let[firstName,surname, ...names] = "Tapiwa Mabhena Nicole Karidza".split(' ')

console.log(firstName)
console.log(surname)
console.log(names)

let user = {};
[user.name, user.lastName] = "Tommy Jones".split(' ')

console.log(user.name)

//default values 

// let[zita, lastZita] = []

// console.log(zita) //undefined
// console.log(lastZita) //undefined

//with default 

let[zita = "Robert", lastZita = "Mugabe"] = ["President"]

console.log(zita) //undefined
console.log(lastZita) //undefined



//Objects 

let {var1, var2} = {var1:'...', var2:'...'}

let options = {
    title: 'Menu',
    width: 100,
    height: 200
}

let {title, width, height} = options 

console.log(title, width, height)

//to change the name of the key as a variable 

let{title: t, width: w, heigth: h} = options 

//as above values can be given a default 

//rest parameter becomes ey for any left over properties

let options = {
    title: "Menu",
    height: 200,
    width: 100
  };
  
  // title = property named title
  // rest = object with the rest of properties
  let {title, ...rest} = options;
  
  // now title="Menu", rest={height: 200, width: 100}
  alert(rest.height);  // 200
  alert(rest.width);   // 100