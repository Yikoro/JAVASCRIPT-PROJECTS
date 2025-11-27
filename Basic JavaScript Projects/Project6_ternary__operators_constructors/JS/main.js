//Ternary function gives you 2 choices to make either or t/f //
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Ternary Chall//
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough": "You are able";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//Keywords object contructor=function, new creates objects of function, this gets the values//
function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =  
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Anime (Genre, Year, Rating) {
    this.Anime_Genre = Genre;
    this.Anime_Year = Year;
    this.Anime_Rating = Rating;
}
var liw = new Anime("Romance", 2019, "10");
var yyh = new Anime("Action", 1992, "10");
var fd = new Anime("Horror", 2011, "10");
function anime_function() {
    document.getElementById("New_and_This").innerHTML =
    "Yu Yu hakusho is an " + yyh.Anime_Genre + " anime released in " + yyh.Anime_Year + 
    " and I personally rate it a " + yyh.Anime_Rating;
}

//Nested function is a function under another function//
function plus_Function() {
    document.getElementById("Nested_Function").innerHTML = plusone();
    function plusone() {
        var Starting_point = 7;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

