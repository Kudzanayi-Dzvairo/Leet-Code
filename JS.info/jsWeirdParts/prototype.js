var person = {
    firstname: 'default',
    lastname: 'default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname
    }
}

var john = {
    firstname: 'John',
    lastname: ' Doe'
}

//don't ever do this, for demo purposes only 
john.__proto__ = person;
console.log(john.getFullName())

var jane = {
    firstname: 'Jane'
}


jane.__proto__ = person
console.log(jane.getFullName())