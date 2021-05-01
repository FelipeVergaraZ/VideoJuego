function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function validar() {
    var a = document.forms["myForm"]["username"].value;
    if (a == "") {
        alert("Falta llenar el Usuario");
        return false;
    }
    var b = document.forms["myForm"]["email"].value;
    if (b == "") {
        alert("Falta llenar el Email");
        return false;
    }
    var c = document.forms["myForm"]["phone"].value;
    if (c == "") {
        alert("Falta llenar el numero");
        return false;
    }
    var d = document.forms["myForm"]["message"].value;
    if (d == "") {
        alert("Falta llenar el mensaje");
        return false;
    }



}