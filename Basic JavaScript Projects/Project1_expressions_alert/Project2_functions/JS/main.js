function My_First_Function() { //Changes text when button is clicked//
    var A =  "Button Text!";
    document.getElementById("B").innerHTML = A;
}

function myFunction() { // "+=" is used to concatenate and this function changes the text when the original text is interacted with//
    var sen= "I am learning"; 
    sen += " Japanese!";
    document.getElementById("jp").innerHTML = sen;
}