// typeof operator//
document.write(typeof "Dragon");
document.write("20" + 10);

// NaN = not a number //
function  nan_function() {
    document.getElementById("nan").innerHTML = 0/0;
}

// example of NaN
function test_function(){
    document.getElementById("test").innerHTML = isNaN("HEllooo");
}

//example of a negative NaN//
function negtest_function(){
    document.getElementById("neg").innerHTML = isNaN("1");
}

//Any number over Javascripts highest peak gives you infinity//
function infinite_function() {
    document.getElementById("inf").innerHTML = (4E510);
}

//adding "-" makes negative infinity//
function neginfinite_function() {
    document.getElementById("neginf").innerHTML = (-4E510);
}

//boolean logic//
document.write(7 < 9);
document.write(7 >= 9);

//console visual//
console.log(1 + 1);
console.log(1 < 0);

//==//
document.write(5 == 25 / 5);
document.write(8 == 100 * 100);

// === Same type and value//
A = 20;
B = 20;
document.write(A === B);

// === diff type and value//
C = 10;
D = "White";
document.write(C === D);

// === diff type same value//
E = 2;
F = "2";
document.write(E === F);

// === same type diff value//
G = 1;
H = 2;
document.write(G === H);

// AND/&& operator//
document.write(0 < 1 && 0 == 0);
document.write(1 > 8 && 9 == 0);

//  (OR) / || operator//
document.write(1 > 0 || 8 > 9);
document.write(1 > 2 || 8 > 9);

// NOT / ! operator//
function not_function() {
    document.getElementById("Not").innerHTML = !(2 > 1);
}

// double negative NOT operator//
function doublenot_function() {
    document.getElementById("--Not").innerHTML = !(2 < 1);
}