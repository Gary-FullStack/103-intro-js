// let username = prompt("enter your name here:");
//let userEmail = prompt("test@test.com:");
//let password = "123abcdef";
//let userAge = "21";
//let couNtry = "usa";
//let saLary = prompt("enter your salry:");
//const monTh = 12;


//console.log(userEmail, username, saLary)

//document.write(`
//<p>User: ${username}</p>
//<p>Email: ${userEmail} </p>
//<p>salary: ${saLary}</p>

//`) 

//fuction declaration
function greeting() {
    console.log("hello");
    //alert("hello");
    //document.write("hello");
    return "Gary"
}
function sum(a, b) {
    global = "affected";
    return a + b;
}

console.log(sum(10, 50));
console.log(global);

let displayValues = function () {
    console.log("displaying Values ...");
}

displayValues();

//arrow function
let traveling = country => "traveling to ..." + country;

travel = traveling("mars");
console.log(travel);


let total = 0;
function addCart(price) {
    total = total + price;
    console.log(total);
    return total;
}


function calculateTaxes() {
    subtotal = addcart(2)
    let totalTax = subtotal * 1.11;

    document.getElementById("receipt")
    innerHTML =
        `<p>Subtotal = ${subtotal} </p>
    <p>Total = ${totalTax}</p>`

}