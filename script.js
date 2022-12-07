console.log("script file")
var age=100; //init and assig
let username="Mike";
let taxes =11.5;
const URL = "http://www.hun.com";

console.log(age,username,URL); //displaying the age, username and URL

username="ed"; //changed the username
taxes=12; //changed the taxes
console.log(username,URL); //displaying the username and URL

let numberChildren=0;
let spousename ="Girl";
let geolocation= "mars";
let jobtitle= "boss";

//document.write(`<p> You will be a ${jobTitle} in ${geoLeocation}, and married to ${partnersName} with ${numberOfChildren + 1} kids</p>`);


document.write(`
<p>you will be a ${jobtitle}</p> <p>on ${geolocation}</p> <p>and living with ${spousename}</p>`)

/*function sayHello() {
    var response =prompt("Hello, what is your name?");
    alert("Hello " + response + "!");*/


/*function sayGreeting(greeting) {
var response = prompt("what is your name?");
alert(greeting + "," + response + "!");
}

sayGreeting("have a good un");*/


/*function add(a, b){
return a + b;
}
console.log(add (20, 30));
console.log(add (150, 30));*/


/*var movies = ['avengers', 'wonder woman', 'batman', 'soups on'];
console.log(movies [0]);

movies.push('dawg pounds');
console.log(movies);*/



/*var movies = ['avengers', 'wonder woman', 'batman', ' soupson']; 
 movies.forEach(function(movie) {
    alert(movie);

 });*/

 /*var movies = ['avengers', 'wonder woman', 'batman', ' soupson'];
 movies.forEach ( movie => alert(movie));*/

 /*var movies = ['avengers', 'wonder woman', 'batman', ' soupson']; 
 for(var movie of movies) {
    console.log(movie); 
 }*/

/* for ( let counter = 1; counter < 10; counter++) {
    console.log( counter );
  } 
  // logs 1, 2, 3, 4, 5, 6, 7, 8, 9
  
  const fruits = ['apple', 'pear', 'cherry'];
  
  for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
  }
  // logs apple, pear, cherry

===================================================

var counter = 1;
while (counter < 10 ) {
  console.log( counter );
  counter = counter + 1;
}

++++++++++++++++++++++++++++++++++++++++++++++++++++

var counter = 1;
do {
  counter = counter + 1;
  console.log( counter );
} while (counter < 10);

===============================================================

const fruits = ['apple', 'pear', 'cherry'];

const capitalizedFruits = fruits.map( fruit => fruit.toUpperCase() );
console.log(capitalizedFruits) // [ 'APPLE', 'PEAR', 'CHERRY' ] */



  var movie = {
    title: 'wonder woman', 
    time: '3pm'
  };

  /*alert(movie = 'avengers');*/

  /*movie.status = 'unavailable';
  console.log(movie);*/

  var movies = [
   title: bob,
   time: 1300,
   status: 'available' 

   title: bob2,
   time: 1305,
   status: 'available' 

   title: bob3,
   time: 1310,
   status: 'available' 
  ];