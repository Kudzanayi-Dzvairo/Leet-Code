// var person = new Object()

// person["firstname"] = "Kudzanayi"
// person["lastname"] = "Dzvairo"

// var firstNameProperty = "firstname"

// console.log(person)
// console.log(person[firstNameProperty])

// console.log(person.firstname)
// console.log(person.lastname)

// person.address = new Object()

// person.address.street = "25 Zimre Way"
// person.address.city = "Harare"
// person.address.country = "Zimbabwe"

// console.log(person.address.city)
// console.log(person["address"]["country"])

var Chipo = {
    firstname: "Rutendo",
    middlename: "Chipo",
    lastname: "Dzvairo",
    address: {
        street: '25 Zimre Way',
        city: "Harare",
        country: "Zimbabwe"
    }
}

function greet(person){
    console.log("Hi " + person.firstname)
}

greet(Chipo)
greet({firstname: "Farai",
lastname: "Dzvairo"
})