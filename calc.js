function calc(){
    var number1 = Number( document.getElementById("number1").value);
    var number2 = Number( document.getElementById("number2").value);
    var operator = document.getElementById("operator").value;


    //calc func
    if(operator === '+'){ // === 는 엄격한 비교 (변수타입까지)
        var result = number1 + number2;
    }
    else if(operator === '-'){
        var result = number1 - number2;
    }
    else if(operator === '*'){
        var result = number1 * number2;
    }
    else if(operator === '/'){
        var result = number1 / number2;
    }

    //output
    var div = document.getElementById("result")
    var output = String(number1) + ' '+ operator + ' ' + String(number2) + ' = ' + String(result);
    div.innerHTML = output; //HTML elements 변경

}