function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function validarnumero() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;


    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "numero invalido";
    } else {
        text = "numero valido";
    }
    document.getElementById("demo").innerHTML = text;
}

function validarusuario() {

    var y = document.forms["myForm"]["fname"].value;
    if (y == "") {
        alert("Name must be filled out");
        return false;
    }
}

function validar() {
    validarusuario();
    validarnumero();
}