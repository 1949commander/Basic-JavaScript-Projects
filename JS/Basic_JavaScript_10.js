function Call_Loop() {
    var text = "";
    var i = 0;
    while (i <= 15) {
        text += "<br> The number is " + i;
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}
function Call_Char () {
    var str = "Good Morning USA!";
    var n = str.length;
    document.getElementById("strng").innerHTML = n;
}
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
}
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[3] + ".";
}
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "Red";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " +Musical_Instrument.price +" color is " +Musical_Instrument.color+ " brand is " +Musical_Instrument.brand;
}
function test_Function() {
    var X = 82;
    document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X)
}

/* var x = myFunction(5, 3); 

function myFunction(a, b) {
  return a * b;   
}  
document.getElementById("demo").innerHTML = x; */
/* 
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description(); */


/* var text = "";
var i; // Creates variable i
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 12; i++) {
  if (i === 5) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo_2").innerHTML = text; */