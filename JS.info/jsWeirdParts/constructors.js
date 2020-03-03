function Person() {

     console.log(this)
     this.firstname = 'John'
     this.lastname = 'Doe'

}

Person.prototype.getFullName = function(){
    return this.firstname + ' ' + this.lastname
}

var john = new Person()
console.log(john)

var jane = new Person()
console.log(jane)

