const funciones = require('./funciones.js');

//tests descuento
test("El 20% de 100 es igual a 20", () => {
    expect(funciones.calcularDescuento(100, 20)).toBe("El descuento es: 20");
});

test("El 120% de 100 es igual a 120", () => {
    expect(funciones.calcularDescuento(100, 120)).toBe("Porcentaje invalido");
});

test("El -20% de 100 es igual a -20", () => {
    expect(funciones.calcularDescuento(100, -20)).toBe("Porcentaje invalido");
});

//tests password
test("The password 'HolaPirinola' is unvalid", () => {
    expect(funciones.validarPassword("HolaPirinola")).toBeFalsy();
});

test("The password 'HolaPirinola123' is valid", () => {
   expect(funciones.validarPassword("HolaPirinola123")).toBeTruthy();
});

//tests farenheit
test("10 grados celcius son equivalentes a 50 grados Farenheit", ()=>{
    expect(funciones.celciusAFarenheit("10")).toBe(50)
});

//tests edad
test("Ser de 13 es ser mayor de edad", ()=>{
    expect(funciones.esMayorDeEdad("13")).toBeFalsy();
})

test("Ser de 25 es ser mayor de edad", ()=>{
    expect(funciones.esMayorDeEdad("25")).toBeTruthy();
})

//tests nombre
test("Tu nombre completo es Miguel Ortiz", () =>{
    expect(funciones.generarNombreCompleto("Miguel", "Ortiz")).toBe("Tu nombre completo es Miguel Ortiz")
})