// Constructor function for creating a 'Person' object
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype of the 'Person' constructor
  Person.prototype.sayHello = function() { 
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  // Creating instances of the 'Person' object
  const person1 = new Person('John', 30); 
  const person2 = new Person('Jane', 25);
 
  // Calling the 'sayHello' method on instances
//   person1.sayHello(); // Output: Hello, my name is John and I am 30 years old.
//   person2.sayHello(); // Output: Hello, my name is Jane and I am 25 years old.




//  Path: prototype.js, Create custom forEach method for arrays using prototype property of Array constructor function 
console.log(Array.prototype)
Array.prototype.customForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this,i);
  }
};

const myArray = [1, 2, 3, 4, 5];

// Using the custom forEach method
myArray.customForEach(function(array,index) {
  console.log(`Element at index ${index}: ${array[index]}`);
});

