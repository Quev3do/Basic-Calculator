function master(c){
    let numb = parseFloat(document.getElementById("number1").value);
    let numb1 = parseFloat(document.getElementById("number2").value);

    switch(c){
        case "add":
            return numb + numb1;
        case "subs":
            return numb - numb1;
        case "mult":
            return numb * numb1;
        case "div":
            return numb / numb1;
        default:
            return null;
    }
}

function sumar(){
    let result = document.getElementById("result");

    result.innerText = master("add");
}

function restar(){
    let result = document.getElementById("result");

    result.innerText = master("subs");
}

function multiplicar(){
    let result = document.getElementById("result");

    result.innerText = master("mult");
}

function dividir(){
    let result = document.getElementById("result");

    result.innerText = master("div");
}