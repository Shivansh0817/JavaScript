const person = {   //object
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};

person.greet(); // This will call the greet method and output the message to the console.
