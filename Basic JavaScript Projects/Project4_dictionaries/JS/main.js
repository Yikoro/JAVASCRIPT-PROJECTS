//Dictionary//
function my_Dictionary() {
    var Car = {
        Name: "S15",
        Color: "Silver",
        Brand: "Nissan",
        Years: "1999-2002"
    };
    delete Car.Name; //Deletes Value//
    document.getElementById("Dictionary").innerHTML = Car.Name; //Specifies value to spit out//
}