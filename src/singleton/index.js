import {Singleton2, Singletons} from "./singletons.js";

function first() {
  let instanceOne = Singletons.getInstance();
  instanceOne.username = "Jack";

  let instanceTwo = Singletons.getInstance();
  console.log("Second Instance: ", instanceTwo.username);
  // Output - Second Instance:  Jack

  console.log("Are both instance equal? ", instanceOne === instanceTwo);
  // Output - Are both instance equal?  true
}

first();

function second() {
  let instanceOne = new Singleton2();
  console.log("First Instance: ", instanceOne);
  // Output - First Instance:  { _username: null }
  instanceOne.username = "Jack";
  console.log("First Instance: ", instanceOne);
  // Output - Second Instance:  { _username: 'Jack' }

  let instanceTwo = new Singleton2();
  instanceTwo.username = "Jake";
  console.log("Second Instance: ", instanceTwo);
  // Output - Second Instance:  { _username: 'Jake' }

  console.log(instanceOne === instanceTwo); // true

  console.log("First Instance: ", instanceOne);
  // Output - Second Instance:  { _username: 'Jake' }

  let instanceThree = new Singleton2();
  console.log("Third Instance: ", instanceThree);
  // Output - Third Instance:  { _username: 'Jake' }
}

second();