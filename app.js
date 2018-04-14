var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

//  Do NOT do this EVER! For learning purposes only!!!
john.__proto__ = person;

for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ': ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return this.firstname;
    }
}

_.extend(john, jane, jim);

console.log(john);


// Polyfill
if(!Object.create) {
    Object.create = function(o) {
        if (arguments.length  >1) {
            throw new Error('Object.create implementation'
            + ' only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    }
}

// Object.create & pure prototypal inheritance
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);















