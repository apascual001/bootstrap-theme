"use strict";
//var plate = document.forms[0].nodeValue;
//var plate = document.forms[0]["plate"].value;
//var value = parseFloat((<HTMLInputElement>document.getElementById("myValue")).value);
//var inputValue = (<HTMLInputElement>document.getElementById(elementId)).value;
//var str = (<HTMLInputElement>document.getElementById("myUnit")).value; 
//let str : string = (<HTMLInputElement>document.getElementById("myUnit")).value; 
//console.log(plate);
function createCarrrrrrrr(plate, color, brand) {
    //var showInfo = document.getElementById('showInfo');
    var plate = document.getElementById("plate").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    var carInfo = document.getElementById("carInfo");
    console.log(carInfo);
    //var button = <HTMLInputElement>document.body.querySelector("enviar");
    //button.addEventListener("click", (event) => {event.preventDefault();});
    var car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    carInfo.innerText = "CAR: PLATE: " + car.plate
        + " COLOR: " + car.color + " BRAND: " + brand
        + " WHEELS: " + JSON.stringify(car.wheels);
}
