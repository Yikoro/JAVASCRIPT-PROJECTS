//concat connects multiple strings together//
function connect_sentence() {
    var ichi = "The S15 ";
    var ni = "is an awesome ";
    var san = "car and I think ";
    var yon = "you should look into it.";
    var complete = ichi.concat(ni, san, yon);
    document.getElementById("Connect").innerHTML = complete;
}

//slice method extracts a section of a string//
function pizza_method() {
    var pizzage = "You can have all the pizza!"
    var pizztion = pizzage.slice(21, 27);
    document.getElementById("pizza").innerHTML = pizztion;
}

//toUpperCase method//
function uppercase_method(){
    var X = "Uppercase";
    var Y = X.toUpperCase();
    document.getElementById("upper").innerHTML = Y;
}

//Number to string method//
function numbpad() {
    var J =22;
    document.getElementById("Num_string").innerHTML = J.toString();
}

//toPrecision method formats a number to a specific length//
function precise_number() {
    var I = 1234.567891
    document.getElementById("Prec").innerHTML = I.toPrecision(10);
}

//toFixed() rounds number into string using specific decimal//
function fix_function() {
    var ue = 7.2
    var O = ue.toFixed();
    document.getElementById("wan").innerHTML = O;
}

//valueOf() returns the prim value of a string//
function prim_method() {
    var L = "The sky is red?";
    var Light = L.valueOf();
    document.getElementById("prim").innerHTML = Light;
}