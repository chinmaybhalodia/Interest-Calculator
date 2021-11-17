// This function clear all the values
function clearScreen() {
    document.getElementById("amount").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("time").value = "";
    document.getElementById("interest").value = "";
    document.getElementById("total").value = "";
}

// This function evaluates the expression and return result
function calculate() {

    var amt = document.getElementById("amount").value;
    var rate = document.getElementById("rate").value;
    var time = document.getElementById("time").value;

    var int = parseInt((amt*time*rate)/100);
    document.getElementById("interest").value = int;

    var sum = parseInt(amt+((amt*time*rate)/100));
    document.getElementById("total").value = parseInt(amt)+int;
}