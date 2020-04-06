function full_Sentence() {
    var part_1 = "How many ";
    var part_2 = "days in April? ";
    var part_3 = "There are 30 ";
    var part_4 = "days in April.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML =  whole_sentence;
}
function slice_Method() {
    var Sentence = "If civilization is to survive, we must cultivate the science of human relationships - the ability of all peoples, of all kinds, to live together, in the same world at peace."
    var Section = Sentence.slice(70,83)
    document.getElementById("Slice").innerHTML = Section;
}
function to_Uppercase() {
    var text = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML = text.toUpperCase();
}
function to_Search() {
    var str = "Please locate where 'locate' occurs!";
    var pos = str.search("locate");
    document.getElementById("find").innerHTML = pos;
}
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
function precision_Method() {
    var X = 12999.12343433221234443;
    document.getElementById("Precision").innerHTML = X.toPrecision(9);
}
function to_Fixed() {
    var X = 9.875;
    document.getElementById("Rounds").innerHTML =
    X.toFixed(0) + "<br>" +
    X.toFixed(1) + "<br>" +
    X.toFixed(2) + "<br>" +
    X.toFixed(6) + "<br>"
}
function value_Of() {
    var Y = 123;
    document.getElementById("value").innerHTML = 
    Y.valueOf() + "<br>" +
    (123).valueOf() +"<br>" +
    (100 + 23).valueOf()
}