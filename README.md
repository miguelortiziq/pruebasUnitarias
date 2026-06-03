# README - Pruebas Unitarias con Jest

## Descripción General

Este proyecto contiene una colección de funciones básicas desarrolladas en JavaScript junto con sus respectivas pruebas unitarias utilizando Jest.

El objetivo es validar el comportamiento esperado de cada función mediante distintos escenarios, incluyendo casos válidos e inválidos.

---

# 1. Función: calcularDescuento()

## Propósito

Calcula el monto de descuento a aplicar sobre un precio utilizando un porcentaje determinado.

### Sintaxis

```javascript
calcularDescuento(precio, porcentaje)
```

### Parámetros

| Parámetro  | Tipo   | Descripción             |
| ---------- | ------ | ----------------------- |
| precio     | Number | Precio original         |
| porcentaje | Number | Porcentaje de descuento |

### Retorno

* Devuelve el monto del descuento calculado.
* Devuelve `"Porcentaje invalido"` cuando el porcentaje es menor a 0 o mayor a 100.

### Ejemplo

```javascript
calcularDescuento(100, 20);
```

Resultado:

```javascript
"El descuento es: 20"
```

---

## Pruebas realizadas

### Caso 1: Descuento válido

```javascript
calcularDescuento(100, 20)
```

Valida que el cálculo del descuento sea correcto.

### Caso 2: Porcentaje mayor a 100

```javascript
calcularDescuento(100, 120)
```

Valida que no se permitan porcentajes superiores al 100%.

### Caso 3: Porcentaje negativo

```javascript
calcularDescuento(100, -20)
```

Valida que no se permitan porcentajes negativos.

### Tabla de pruebas

| Caso                   | Entrada    | Resultado esperado    |
| ---------------------- | ---------- | --------------------- |
| Descuento válido       | (100, 20)  | "El descuento es: 20" |
| Porcentaje mayor a 100 | (100, 120) | "Porcentaje invalido" |
| Porcentaje negativo    | (100, -20) | "Porcentaje invalido" |

---

# 2. Función: validarPassword()

## Propósito

Verifica si una contraseña cumple con los requisitos mínimos de seguridad.

### Reglas actuales

* Debe contener al menos un número.
* Debe tener mínimo 8 caracteres.

### Sintaxis

```javascript
validarPassword(password)
```

### Retorno

* true → contraseña válida.
* false → contraseña inválida.

---

## Pruebas realizadas

### Caso 1: Contraseña sin números

```javascript
validarPassword("HolaPirinola")
```

Valida que una contraseña sin números sea rechazada.

### Caso 2: Contraseña válida

```javascript
validarPassword("HolaPirinola123")
```

Valida que una contraseña con números y longitud suficiente sea aceptada.

### Tabla de pruebas

| Caso              | Entrada         | Resultado esperado |
| ----------------- | --------------- | ------------------ |
| Sin números       | HolaPirinola    | false              |
| Contraseña válida | HolaPirinola123 | true               |

---

# 3. Función: celciusAFarenheit()

## Propósito

Convierte grados Celsius a Fahrenheit.

### Fórmula utilizada

```text
°F = (°C × 9/5) + 32
```

### Sintaxis

```javascript
celciusAFarenheit(celcius)
```

### Retorno

Devuelve la temperatura equivalente en grados Fahrenheit.

### Ejemplo

```javascript
celciusAFarenheit(10)
```

Resultado:

```javascript
50
```

---

## Pruebas realizadas

### Caso 1: Conversión de temperatura

```javascript
celciusAFarenheit(10)
```

Valida que la conversión se realice correctamente.

### Tabla de pruebas

| Caso                            | Entrada | Resultado esperado |
| ------------------------------- | ------- | ------------------ |
| Conversión Celsius a Fahrenheit | 10      | 50                 |

---

# 4. Función: esMayorDeEdad()

## Propósito

Determina si una persona es mayor de edad.

### Regla

* 18 años o más → true
* Menor de 18 años → false

### Sintaxis

```javascript
esMayorDeEdad(edad)
```

### Retorno

* true → Mayor de edad.
* false → Menor de edad.

---

## Pruebas realizadas

### Caso 1: Menor de edad

```javascript
esMayorDeEdad(13)
```

Valida que una persona menor de 18 años sea identificada correctamente.

### Caso 2: Mayor de edad

```javascript
esMayorDeEdad(25)
```

Valida que una persona mayor de edad sea identificada correctamente.

### Tabla de pruebas

| Caso          | Entrada | Resultado esperado |
| ------------- | ------- | ------------------ |
| Menor de edad | 13      | false              |
| Mayor de edad | 25      | true               |

---

# 5. Función: generarNombreCompleto()

## Propósito

Genera un mensaje con el nombre completo de una persona.

### Sintaxis

```javascript
generarNombreCompleto(nombre, apellido)
```

### Retorno

Devuelve una cadena con el nombre y apellido concatenados.

### Ejemplo

```javascript
generarNombreCompleto("Miguel", "Ortiz")
```

Resultado:

```javascript
"Tu nombre completo es Miguel Ortiz"
```

---

## Pruebas realizadas

### Caso 1: Nombre completo correcto

```javascript
generarNombreCompleto("Miguel", "Ortiz")
```

Valida que el nombre y apellido se concatenen correctamente.

### Tabla de pruebas

| Caso            | Entrada       | Resultado esperado                   |
| --------------- | ------------- | ------------------------------------ |
| Nombre completo | Miguel, Ortiz | "Tu nombre completo es Miguel Ortiz" |

---

# Resumen General de Cobertura

| Función                 | Casos probados |
| ----------------------- | -------------- |
| calcularDescuento()     | 3              |
| validarPassword()       | 2              |
| celciusAFarenheit()     | 1              |
| esMayorDeEdad()         | 2              |
| generarNombreCompleto() | 1              |

**Total de pruebas ejecutadas:** 9

Estas pruebas permiten verificar el comportamiento principal de cada función, incluyendo escenarios válidos e inválidos para asegurar un funcionamiento consistente.
