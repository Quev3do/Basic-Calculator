function sumar(){
    let numb = parseInt(document.getElementById("number1").value);
    let numb1 = parseInt(document.getElementById("number2").value);

    let result = document.getElementById("result");
    let resulttxt = numb + numb1;

    result.innerText = (resulttxt);
}

function restar(){
    let numb = parseInt(document.getElementById("number1").value);
    let numb1 = parseInt(document.getElementById("number2").value);

    let result = document.getElementById("result");
    let resulttxt = numb - numb1;

    result.innerText = (resulttxt);
}

function multiplicar(){
    let numb = parseInt(document.getElementById("number1").value);
    let numb1 = parseInt(document.getElementById("number2").value);

    let result = document.getElementById("result");
    let resulttxt = numb * numb1;

    result.innerText = (resulttxt);
}

function dividir(){
    let numb = parseInt(document.getElementById("number1").value);
    let numb1 = parseInt(document.getElementById("number2").value);

    let result = document.getElementById("result");
    let resulttxt = numb / numb1;

    result.innerText = (resulttxt);
}