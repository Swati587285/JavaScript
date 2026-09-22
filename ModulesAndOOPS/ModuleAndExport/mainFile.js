import { Animal } from "./Animal.js";

export class Dog extends Animal {
  bark() {
    console.log("Dog is barking");
  }
}
const dog = new Dog();
dog.eat();                  //Animal is eating
dog.bark();                 //Dog is barking
