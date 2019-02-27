/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - The default context is the Window, so a basic function that is defined and called will be bound to the Window
* 2. Implicit Binding - With this type of binding we use dot notation to bind to the object that the function we're calling is stored in.
* 3. New Binding - When we use the new keyword we generate a new object based on the class constructor and that object is the binding for 
this.
* 4. Explicit Binding - Here we use the functions call, apply and bind in order to force whatever function we're calling to use 
another object of our choice for its binding.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greetMe(name) {
	console.log(`Hello ${name}`);
}

greetMe('Josh');

// Principle 2

// code example for Implicit Binding

const guy = {
	name: "Jimothy",
	height: 72,
	announceHeight: function() {
		return `${this.name} is ${this.height} inches tall.`;
	}
}

console.log(guy.announceHeight());

// Principle 3

// code example for New Binding

function Person(name, height) {
	this.name = name;
	this.height = height;
	this.announceHeight = function() {
		return `${this.name} is ${this.height} inches tall.`;
	}
}

const jimothy = new Person("Jimothy", 72);
console.log(jimothy.announceHeight());

// Principle 4

// code example for Explicit Binding

const person = {
  name: "Jill"
}

const skills = ["HTML","CSS","JS"];

function introduce(skills1, skills2, skills3) {
  return `Hello! my name is: ${this.name} and these are my skills: ${skills1}, ${skills2}, ${skills3}`;
}

console.log(introduce.call(person, skills));