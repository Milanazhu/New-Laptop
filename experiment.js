function sum (raw, variable) {
    const result = raw + variable
    return result;
}

function number (raw) {
    raw = 0+0
    return raw;
}

let wert = setTimeout(sum, 1000, [0], [2])
console.log(wert);
