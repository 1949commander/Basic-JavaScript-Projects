function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
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
    "Erik drives a " + Erik.Vehicle_Color + "-colored "
+ Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
function myFunction_2() {
    document.getElementById("New_and_This").innerHTML = 
    "Jack drives a " + Jack.Vehicle_Color + "-colored "
+ Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;
}
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new Person("John", "Doe", 50, "blue");
function myFunction_3() {
    document.getElementById("demo").innerHTML = "My father is " + myFather.age + ".";
}

function myFunction_4(){
    document.getElementById("Nested_Function").innerHTML = add_One();
    function add_One () {
        var counter = 0;
        function Plus_one() {counter += 1;}
        Plus_one();
        Plus_one();
        Plus_one();
        return counter;
    }
}