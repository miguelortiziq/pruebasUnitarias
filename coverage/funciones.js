function calcularDescuento(precio, porcentaje){
    if (porcentaje < 0 || porcentaje > 100) {
        return "Porcentaje invalido";
    } else {
        return `El descuento es: ${precio * (porcentaje / 100)}`;
    }
    
}

function validarPassword(password){
    const regex = new RegExp(/^(?=.*?[0-9]).{8,}$/);
    if (!(password.match(regex))){
        return false;
    } else {
        return true;
    }
}

function celciusAFarenheit(celcius){
    let Farenheit = (celcius * 9 / 5) + 32
    return Farenheit;
}

function esMayorDeEdad(edad){
    if (edad < 18){
        return false;
    } else {
        return true;
    }
}

function generarNombreCompleto(nombre, apellido){
    return `Tu nombre completo es ${nombre} ${apellido}`
}

generarNombreCompleto


module.exports.calcularDescuento = calcularDescuento;
module.exports.validarPassword = validarPassword;
module.exports.celciusAFarenheit = celciusAFarenheit;
module.exports.esMayorDeEdad = esMayorDeEdad;
module.exports.generarNombreCompleto = generarNombreCompleto;