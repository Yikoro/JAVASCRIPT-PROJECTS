//Addition Function//
function addition_Function() {
    var addition = 4 + 4;
    document.getElementById("Math").innerHTML = "4 + 4 = " + addition;
}

//Subtraction Function//
function subtraction_Function() {
    var subtraction = 4 - 4;
    document.getElementById("Sub").innerHTML = "4 - 4 = " + subtraction;
}

//Multiplication Function//
function multiplication() {
    var simp_multi = 4 * 4;
    document.getElementById("Multi").innerHTML = "4 x 4 = " + simp_multi;
}

//Division Function//
function division() {
    var simp_div = 4 / 4;
    document.getElementById("divi").innerHTML = "4 / 4 = " + simp_div;
}

//A+S+M+D Function//
function lots_math() {
    var all_math = (4 + 4) * 10 / 2 - 2;
    document.getElementById("asmd").innerHTML = "4 plus 4, multiplied by 10, divided in half and then subtracted by 2 equals " + all_math;
}

//Modulus Function//
function modulus() {
    var modulus_math = 25 % 6;
    document.getElementById("modu").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus_math;
}

//Negative Function =Turns number negative//
function negation() {
    var A = 1;
    document.getElementById("Negative").innerHTML = -A;
}

//Increment Function = +1 to var//
function increment(){
    var I = 4;
    I++;
    document.getElementById("Incra").innerHTML = I++;
}

//Decrement Function = -1 to var//
function decrement(){
    var D = 4;
    D--;  
    document.getElementById("Dinca").innerHTML = D--;
}

//Math random Function shows random number in set parameters//
window.alert(Math.random() * 100); 

//Math Object allows you to perform math tasks, in this example we are using it to get pie//
function pie(){
    document.getElementById("Pi").innerHTML = Math.PI;
}
