//global variable can be accessed from any function//
var V = 9;
function Add_numbers_1() {
    document.write(20 + V + "<br>");
}
function Add_numbers_2() {
    document.write(V + 100);
}
Add_numbers_1();
Add_numbers_2();

//local variable is inside a function//
function Add_numbers_3() {
    var Z = 100
    document.write(20 + Z + "<br>");
} 
function Add_numbers_4() {
    document.write(Z + 100);
}
Add_numbers_3();
Add_numbers_4();

//intentional error fix in console log//
function error_function() {
    document.getElementById("error").innerHTML = "error fixed.";
}

//if statement//
function saturn_function() {
    if (new Date().getHours() < 23) {
        document.getElementById("Saturn").innerHTML = "How is Saturn?";
    }
}

//if statement practice//
function one_nine() {
    if (1 < 9) {
        document.write("One is smoll compared to nine.")
    }
}

//if and else statement//
function language_function() {
    Years = document.getElementById("Years").value;
    if (Years >= 0) {
        Vote = "That's awesome!";
    }
    else {
        Vote = "You sure about that?";
    }
    document.getElementById("new_language").innerHTML = Vote;
}

function toki_function() {
    var toki = new Date().getHours();
    var Respond;
    if (toki < 12 == toki > 0) {
        Respond = "Top of the morning to you!";
    }
    else if (toki >= 12 == toki < 18) {
        Respond = "Afternoon yes?";
    }
    else {
        Respond = "Evnin Gents";
    }
    document.getElementById("Toki_day").innerHTML = Respond;
}
    



