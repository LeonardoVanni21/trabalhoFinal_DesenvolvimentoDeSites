function appendToDisplay(value) {
    $("#result").val(value);
}

function calculateImc() {
    var peso = $("#peso").val();
    var altura = $("#altura").val();
    var imc = peso / (altura * altura);
    appendTextImc(imc.toFixed(2));
}

function appendTextImc(value) {
    if(value < 18.5){
        appendToDisplay(value + " - Abaixo do peso");
    }
    else if(value >= 18.5 && value < 25){
        appendToDisplay(value + " - Peso normal");
    }
    else if(value >= 25 && value < 30){
        appendToDisplay(value + " - Sobrepeso");
    }
    else if(value >= 30 && value < 35){
        appendToDisplay(value + " - Obesidade grau 1");
    }
    else if(value >= 35 && value < 40){
        appendToDisplay(value + " - Obesidade grau 2");
    }
    else if(value >= 40){
        appendToDisplay(value + " - Obesidade grau 3");
    }
}