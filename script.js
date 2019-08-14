// ----------------------------- LIGHTNING EXERCISE ------------------------------//
// / --
// Instantiate and assign a variable called `myName` that holds the value of your name as a string
// Instantiate and assign a variable called `numberOfPets` that stores the number of pets you have as a number.
// Instantiate and assign a variable called `birthday` that holds your birthday as a string
// Use string interpolation to build a sentence about yourself using the three variables you just created
// Log the sentence to the console

var myName = "Jacob"

var numberOfPets = 2

var birthday = "March 4th 1991"

var aboutMe = `My name is ${myName}, I have ${numberOfPets} pets, and my birthday is ${birthday}.`

console.log(aboutMe)


var petNames = ["Cooper", "Bill"];

console.log(petNames [0])
console.log(petNames [1])

// ------------------------- lightning exercises --------------------//
// Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

// Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

// Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

// Given the object below, output the wardrobe's width to the console
// Output its manufacturer
// Output the first item in its `contents` array to the console
var wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
  };

  console.log(wardrobe.width);
  console.log(wardrobe.manufacturer);
  console.log(wardrobe.contents);

  var fordMustang = {
      color: "red",
      model: 2015,
  }

  console.log(fordMustang)

  var petNames = ["Kippers", "Jack", "Gypsy", "Angus","Seymour Bouts", "Sharky"]

  console.log(petNames);

  var familyMembers = [
      { 
          name: "Mom",
          age: 60
      },
      {
          name: "Dad",
          age: 59,
      },
      {
          name: "Neil",
          age: 34,
      },
      {
          name: "James",
          age: 35,
      }
  ]

  console.log(familyMembers)
      
// Print each value in the array to the console using a for loop
var alumni = [
    "Nick",
    "Charles",
    "Nikki",
    "Dale",
    "Tommy",
    "Connor",
    "Sable",
    "Sydney",
    "Josh",
    "Joey",
    "Matt",
    "David",
    "Russ",
    "Bobby"
  ]
  
 for(var counter=0; counter <alumni.length; counter = counter +1) {
     console.log("counter for alumni loop", counter)
     console.log(alumni[counter])
 } 


//  function screamGreeting(greeting, friend){
//      var phrase =`${greeting}, ${friend}, how are you today?`
//      var scream = phrase.toUpperCase
//  }

