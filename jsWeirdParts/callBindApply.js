var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname
    }
}

var logname = function(lang1, lang2){

    console.log('Logged: ' + this.getFullName())
    console.log('Arguments: ' + lang1 + ' ' + lang2)
    console.log('----------')
}.bind(person)


var logPersonName = logname.bind(person)

logPersonName();

logname.call()


var person2 = {
    firstname: 'Sam',
    lastname: 'Jones'
}

console.log(person.getFullName.apply(person2))