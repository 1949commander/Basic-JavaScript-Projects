function toCelsius() {
    var fahrenheit = 90;
    var z = (5/9) * (fahrenheit-32);

  document.getElementById("demo").innerHTML = z;
}
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}
function subtraction_Function() {
    var Subtraction = 10 - 8;
    document.getElementById("Subt").innerHTML = "10 - 8 =" + Subtraction;    
}
function multiplication() {
    var simple_Mult = 5 * 9;
    document.getElementById("mult").innerHTML = "5 x 9 = " + simple_Mult;
}
function division() {
    var simple_Div = 9 / 4;
    document.getElementById("divide").innerHTML = "9 / 4 = " +simple_Div;
    
}
function more_Math() {
    var multi_Math =(9 + 6) * (8 / 3) -2;
    document.getElementById("m_Math").innerHTML = `9 plus 6, multiplied by 8 divided by 3 minus 2 equals${multi_Math}`;
}
function modulus_Operator() {
    var remain_Math = 25 % 3;
    document.getElementById("r_math").innerHTML = `When you divide 25 by 3 you have a remainder of: ${remain_Math}`;
}
function negation_Operator() {
    var neg_x = 12;
    document.getElementById("no_Math").innerHTML = `Negative value of: ${neg_x}`;
}
function add_One() {
    var x = 5;
    x++;
    var z = x;
    document.getElementById("increment").innerHTML = "z =" + x;
}
function sub_One() {
    var x = 22;
    x--;
    var z = x;
    document.getElementById("decrement").innerHTML = "z =" + x;
}
function rand_Num() {
    window.alert(Math.random());
}
function rand_Num_W() {
    window.alert(Math.random() * 100);
}
function sin_Num() {
    window.alert(Math.sin(45 * Math.PI / 180));
}
function min_Num() {
    document.getElementById("minimum").innerHTML =
    Math.min(0, 150, 30, 20, -8, -200, -222, 300, 50, -123);
}