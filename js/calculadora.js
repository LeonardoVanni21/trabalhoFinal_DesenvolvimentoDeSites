function appendToDisplay(value) {
    $("#result").val($("#result").val() + value);
}

function clearDisplay() {
    $("#result").val("");
}

function clearLastDigit() {
    $("#result").val($("#result").val().slice(0, -1));
}

function calculateResult() {
    var result = eval($("#result").val());
    $("#result").val(result);
}

$(document).keydown(function (event) {
    var key = event.key;
    if (/^[0-9+\-*/.]$/.test(key)) {
        event.preventDefault();
        appendToDisplay(key);
    }
    if (key === "Enter") {
        event.preventDefault();
        calculateResult();
    }
    if (key === "Backspace") {
        event.preventDefault();
        clearLastDigit();
    }
    if (key === "Delete") {
        event.preventDefault();
        clearDisplay();
    }
});