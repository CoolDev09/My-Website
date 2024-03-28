//Introduction to java script
//this is a single line comment
/* 
This
is
a
multiline
comment
*/


//Variables
/*
There are two steps:
1. Making a decleration (Var, Let, Const)
2. Assignment (=assignment operator)
*/
/*
let School = "Samueli Academy"; //strings
let Grade = 8;//Numbers
let Inthefreindgroup = true;//booleans

//if you need to add a number you can do grade = grade + 1

console.log("You are enrolled at", School)
console.log("You are in grade", Grade)
console.log("Freind Group", Inthefreindgroup)

document.getElementById("p1").innerHTML = "You are enrolled at " + School;
document.getElementById("p2").innerHTML = "You are in grade " + Grade;
document.getElementById("p3").innerHTML = "Freind Group " + Inthefreindgroup;

*/

//Dice Roller

let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}