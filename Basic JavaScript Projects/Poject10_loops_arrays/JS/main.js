//Finds length of a string/var//
function Call_Loop() {
    var txt = "Loops loops loops loops looops looooops loooooooops";
    var length = txt.length;
    document.getElementById("Loop").innerHTML = length;
}

//for loop lists out content till given point is reached//
var Anime = ["Rezero", "Yu Yu hakusho", "LIW", "Hunter X Hunter", "Dragon Ball"];
var content = "";
var A;
function for_Loop() {
    for (A = 0; A < Anime.length; A++) {
        content += Anime[A] + "<br>";
    }
    document.getElementById("List_of_Anime").innerHTML = content;
}

//Arrays are collections of data and are objects//
function array_Function() {
    var cars = [];
    cars[0] = "Red";
    cars[1] = "Revving";
    cars[2] = "Fast";
    cars[3] = "Orange";
    document.getElementById("Array").innerHTML = "In this example the car is " +
        cars[0] + ".";
}

//const keyword creates a constant that can be global or local to block it was declared//
function constant_function(){
    const cat = {type:"House cat", breed:"Bombay", color:"black" };
    cat.color = "Red";
    cat.price = "$50";
    cat.loyalty = "55%";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        cat.type + " was " + cat.price;
        document.getElementById("Constant").innerHTML = "The cost has decreased to " +
        cat.price + " because its loyalty is " + cat.loyalty;
}

//let keyword cannot be accessed outside of block
var I = 10;
document.write(I);
{
    let I = 12;
    document.write("<br>" + I);
}
document.write("<br>" + I);

//assign object using let keyword assignment//
function des_func() {
    let animal = {
    type: "Mammal ",
    family: "Cats ",
    cat_type: "Tiger ",
    Life_exp: "10 - 15 years "
    }
    document.getElementById("Animal_Object").innerHTML = "The animal is a " + animal.type 
    + "from the " + animal.family + " family know for it's stripes it is a " + animal.cat_type 
    + ", they are known to live up to " + animal.Life_exp;
}

    

 





