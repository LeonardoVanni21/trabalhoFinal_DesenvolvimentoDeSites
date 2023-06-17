const maskPhoneNumber = (value) => {
    if (!value) return ''

    return value
        .replace(/[\D]/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(value[5] != 9 ? /(\d{5})(\d)/ : /(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})(\d+?)/, '$1')
}

const applyPhoneNumberMask = (input) => {
    input.value = maskPhoneNumber(input.value)
}

function makeJson() {
    let nome = $("#nome").val();
    let email = $("#email").val();
    let telefone = $("#telefone").val();
    let senha = $("#senha").val();
    let json = {
        "nome": nome,
        "email": email,
        "telefone": telefone,
        "senha": senha
    }
    console.log(json);
    $("#result").val(JSON.stringify(json));

    $("#result").each(function () {
        let json = $(this).val();
        if (json != "") {
            json = JSON.stringify(JSON.parse(json), undefined, 2);
            $(this).val(json);
        }
    });
}