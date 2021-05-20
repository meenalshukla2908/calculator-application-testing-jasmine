function add(a, b) {
    return a + b;
}
 
function subtract(a, b) {
    return a - b;
}
 
function multiply(a, b) {
    return a * b;
}
 
function divide(a, b) {
    let value = a * 1.0 / b;
    if (!isFinite(value))
        throw new RangeError('Divide-by-zero');
    else
        return a/b;
}

function mixed(a,b,c,d){
    let value = a+b*c/d;
    return value;
}