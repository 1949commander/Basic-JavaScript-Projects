function my_Dictionary() {
    var Car = {
        Brand:"Studebaker",
        Model:"Commander",
        Body:"Coupe",
        Trim:"Regal",
        Color:"Green",
        Year:1949,
    };
    delete Car.Trim;
    document.getElementById("Dictionary").innerHTML = Car.Trim;
}