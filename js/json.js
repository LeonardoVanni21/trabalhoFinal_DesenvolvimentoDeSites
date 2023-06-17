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