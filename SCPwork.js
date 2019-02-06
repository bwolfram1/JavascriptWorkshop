function calc() {
    var number1 = document.getElementById("firstOne").value;
    var number2 = document.getElementById("secondTwo").value;
    var calcNum = number1 * number2;
    console.log(number1);
    document.getElementById("things").innerHTML = calcNum;
}

