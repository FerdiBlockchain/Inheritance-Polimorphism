/*
    1. Create a class called "Shape" whose constructor
       takes one parameter:
       - colour
       Assign "colour" to the instance of Shape with a 
       default value of "Transparent"
       Add a "type" property to "this" with a default
       value of "Shape"
    2. Add a method to "Shape" called "describe" that
       will console log out the following to the console:
       `A ${this.colour} ${this.type}`
       // Shape class -> - colour = "Transparent", type, describe
    3. Create a class called "Square" whose constructor
       takes 2 parameters (Square has to extend Shape):
       - colour
       - sideLength
       Call the super constructor with "colour"
       Assign "sideLength" to the instance of "Square"
       Assign "Square" to the "type" property
       // Square class -> colour, sideLength -> type = "Square"
    4. Add an "area" method to "Square" that will calculate
       and return the total area of the square.
       (Area of a square is: sideLength * sideLength)
       // area method
    
    5. Create a class called "Rectangle" whose constructor
       takes 3 parameters (Rectangle has to extend Shape):
       - colour
       - width
       - height
       Call the super constructor with "colour"
       Assign all of these to the instance of "Rectangle"
       Assign "Rectangle" to the "type" property
    6. Add an "area" method to "Rectangle" that will calculate
       and return the total area of the square.
       (Area of a rectangle is: width * height)
    7. Run the following code and explain it in as much
       technical detail as you can:
       const square = new Square("blue", 5);
       const rectangle = new Rectangle("red", 5, 6);
       console.log( square.area() ); // ?
       console.log( rectangle.area() ); // ?
       for ( const shape of [square, rectangle] ) shape.describe();
       // A blue square
       // A red rectangle
*/

class Shape{
  constructor(colour = "Transparent"){
    this.colour = colour; 
    // this.type = "Shape";
  }

  describe(){
    console.log(`A ${this.colour} ${this.type}`)
  }
}

class Square extends Shape{
  type = "Square";
  constructor(colour, sideLength){
    super(colour);
    this.sideLength = sideLength;

  }  

  area(){
    return this.sideLength * this.sideLength;
  }
}

class Rectangle extends Shape{
  //type = "Rectangle"; - Bu kullanım daha doğru (okunaklı ve anlaşılır).
  constructor(colour, width, height){
    super(colour);
    this.width = width;
    this.height = height;
    this.type = "Rectangle";
  }

  area(){
    return this.width * this.height;
  }
}

const square = new Square("blue", 5);
const rectangle = new Rectangle("red", 5, 6);

console.log(square.type);
console.log(rectangle.radius);

rectangle.radius = rectangle.width * rectangle.height;
console.log(rectangle.radius);



//

// Car -> Electrical Car -> Self Driving Car

class Car {
  constructor(range, model) {
    this.range = range;
    this.model = model;
  }

  getModelRange() {
    return this.range + " " + this.model;
  }
}

class ElectricCar extends Car {
  constructor(range, model, battery) {
    super(range, model);
    this.battery = battery;
  }

  charge() {
    return this.model + " is charging...";
  }
}

class SelfDrivingCar extends ElectricCar {
  constructor(range, model, battery, auto) {
    super(range, model, battery);
    this.auto = auto;
  }

  drive() {
    return this.model + " AI is driving";
  }
}

let mercedes = new SelfDrivingCar(0, "Mercedes", 100, "Autopilot");

console.log(mercedes.getModelRange());

console.log(mercedes.charge());

console.log(mercedes.drive());

// Public, Private, Protected

class Person {
  #name = ""; // #name; <-- Bu şekil de yeterli, hata vermez.

  constructor(name, age) {
    this.#name = name; // Private
    this._age = age; // Public
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge < 0) {
      // Protected Logic
      newAge = 0;
    }
    this._age = newAge;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }
}

let p = new Person("John", 20);

console.log(p.name);

p.name = "Emre";
console.log(p.name);

p.age = -20;
console.log(p.age);

//

class Employee {
  constructor(firstName, lastName, job) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.skills = [];
    this.job = job;
    Employee._count++;
  }

  static _count = 0;

  learn(skill) {
    this.skills.push(skill);
  }
}

class Job {
  constructor(company, position, salary) {
    this._company = company;
    this._position = position;
    this._salary = salary;
  }
}

class Employer{
  constructor(job){
    this.job = job;
  }
}

const job_1 = new Job("Ustech", "Developer", 100);
const John = new Employee("John", "Gr", new Job("Ustech", "Developer", 100));

const Michael = new Employee("Michael", "Gr", "job_1");

console.log(John);
console.log(Michael);

John.learn("OOP Programing");

console.log(Employee._count);

console.log(John);

// Polymorphism 

class Animals{


  speak(){
    console.log("Animals have different sounds.")
  }

}

class Cats extends Animals{

  constructor(name, surname, cardno){
    super(name, surname);
    this.cardno = cardno;
  }

  speak(){
    console.log("Cat says meow meow!");
  }

}

class Dogs extends Animals{
  speak(){
    console.log("Dog says woof woof!");
  }
}

let cat1 = new Cats("Mavis", "Mavisoglu");

cat1.speak();

let dog1 = new Dogs();

dog1.speak();