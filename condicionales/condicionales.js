//1
let num1 = 4
let num2 = 5

if (num1 > num2) {
    console.log(num1)
}

else {
    console.log("num2")
}

// entiendo que pide q en caso de q num1 sea mayor q num2, imprima el !!VALOR!!  de num1 (4). 
//de lo contrario imprima num2 ("num2")


//2

if (num1 > num2) {
    console.log("num1")
}

else if (num1 === num2) {
    console.log("Los numeros son iguales")

}

else {
    console.log("num2")
}

// lo mismo aca. no pide que imprima el valor, si no que imprima num1, num2 o "son iguales"


//3

if (num1 == num2) {
    console.log("Los numeros son iguales")
}
else {
    console.log("Los numeros son diferentes")
}


//4

let fecha1 = "2018-9-2"
let fecha2 = "2023-5-7"

if (fecha1 > fecha2) {
    console.log(`La fecha ${fecha1} es
mayor que ${fecha2}`)
}
else if (fecha1 === fecha2) {
    console.log(`La fecha ${fecha1} es
igual a ${fecha2}`)
}
else {
    console.log(`La fecha ${fecha2} es
mayor que ${fecha1}`)
}

//5

fecha1 = "2018-10-7"
fecha2 = "2018-2-17"

if (fecha1 > fecha2) {
    console.log(`La fecha ${fecha1} es
mayor que ${fecha2}`)
}
else {
    console.log(`La fecha ${fecha2} es
mayor que ${fecha1}`)
}

//6
let dato1 = 5
let dato2 = 7
let dato3 = 9

if (dato1 > dato2 && dato1 > dato3) {
    console.log(`El numero ${dato1} es el mayor`)
}

else if (dato2 > dato1 && dato2 > dato3) {
    console.log(`El numero ${dato2} es el mayor`)
}
else {
    console.log(`El numero ${dato3} es el mayor`)
}

//7

let color = prompt("Ingrese un color")

switch (color) {
    case "rojo":
        alert("El color de la pasion")
        break
    case "azul":
        alert("El color del mar")
        break
    case "verde":
        alert("El color de la naturaleza")
        break
    default:
        alert("El mejor color Rey")

}

//8 OJO CON ESTO SOFIA TENES Q ARREGLARLO!!!!!!!!!!

let n1 = 4
let n2 = 5
let cuenta = prompt("Ingrese una operacion")

switch (cuenta) {
    case "suma":
        alert(`La suma de ${num1} + ${num2} es igual a ${num1 + num2}`)
        break
    case "resta":
        alert(`La resta de ${num1} - ${num2} es igual a ${num1 - num2}`)
        break
    case "multiplicacion":
        alert(`La multiplcacion de ${num1} * ${num2} es igual a ${num1 * num2}`)
        break
    case "division":
        alert(`La division de ${num1} / ${num2} es igual a ${num1 / num2}`)
        break
}

//9

let persona1 = {
    nombre: "Juan",
    edad: 39,
    altura: 1.19,
}

let persona2 = {
    nombre: "Marta",
    edad: 37,
    altura: 1.62,
}

if (persona1.edad > persona2.edad && persona1.altura > persona2.altura) {
    console.log(`${persona1.nombre} tiene mas alta y mayor que ${persona2.nombre} `)
}

else if (persona1.edad < persona2.edad && persona1.altura > persona2.altura) {
    console.log(`${persona2.nombre} es mas alta y menor que ${persona1.nombre} `)

}
else if (persona1.edad > persona2.edad && persona1.altura < persona2.altura) {
    console.log(`${persona1.nombre} tiene menos altura
y es mayor que ${persona2.nombre} `)

}
else {
    console.log(`${persona2.nombre} es menos alto y menor que ${persona1.nombre} `)
}


//10
let nombre = prompt("Ingresa tu nombre")
let edad = prompt("ingresa tu edad")
let altura = prompt("ingresa tu altura")
let vision = prompt("ingresa tu vision")


if (edad >= 18 && altura >= 150 && vision >= 8 && vision <= 10) {
    console.log(`Estas capacitado
para conducir`)

}

else {
    console.log("no estas capacitado Rey")
}

//11


// use el pompt de la variable -edad- del ejercicio anterior, me parecio qua era mas sencillo que tener q preguntarlo dos veces jeje n.n

if (edad > 0 && edad <= 12) {
    alert("Eres un infante")
}

else if (edad > 12 && edad <= 18) {
    alert("Eres un adolescente")
}

else if (edad > 19 && edad <= 45) {
    alert("Eres un mayor joven")
}

else if (edad > 45 && edad <= 100) {
    alert("Eres un anciano")
}

else {
    "En realidad tienes esas edad?"
}


//12

const num13 = prompt("ingrese un numero del 1 al 3")

if (num13 <= 3 && num13 >= 1) {
    alert(`El numero ingresado es ${num13}`)
    alert(`El doble del numero ingresado es ${num13 * 2}`)
    alert(`El triple del numero ingresado es ${num13 * 3}`)
}

else {
    alert(`El valor no esta permitido`)
}


const numRandom = prompt(`Ingrese un numero que desee`)

alert(`El numero ingresado es ${numRandom}`)
alert(`El doble del numero ingresado es ${numRandom * 2}`)
alert(`El triple del numero ingresado es ${numRandom * 3}`)


//13


let clientName = prompt("Ingrese nombre del cliente")
let pase = prompt("Tiene pase vip o normal?")
let entrada = prompt("Tiene entrada?")

if (clientName == "Sofia" || pase == "vip") {
    alert("Bienvenid@")

} else if (entrada == "si") {
    let entradaSi = prompt("Deseas usarla?")
    if (entradaSi == "si") {
        alert("Bienvenid@")
    }
    else {
        alert("Nos vimos en disney")
    }
} else {
    const enrtadaNo = prompt("Desea comprar una entrada?")
    if (enrtadaNo == "no") {
        alert("Nos vimos en disney rey")
    }
    else if (enrtadaNo == "si") {
        const entradaDinero = prompt("Cuanto dinero tienes?")
        if (entradaDinero >= "1000") {
            alert("Bienvenido")
        }
        else {
            alert("Nos vimos en disney rey")
        }
    }
}


//14

const numeroIncognita = 7

const numeroIngresado = prompt("Ingrese un numero del 1 al 10")

if (numeroIngresado == "7") {
    alert("Adivinaste rey")
}
else if (numeroIngresado > 7) {
    let intentoDos = prompt("cerca, pero menos")
    if (intentoDos > 7) {
        let intentoTres = prompt("cerca, pero menos")
        if (intentoTres == 7) {
            alert("Adivinaste rey")
        }
        else {
            alert("segui participandon't")
        }
    }
    else if (intentoDos < 7) {
        let intentoTres = prompt("cerca, pero mas")
        if (intentoTres == 7) {
            alert("Adivinaste rey")
        }
        else {
            alert("segui participandon't")
        }

    }
    else if (intentoDos = 7) {
        alert("Adivinaste rey")

    }
}



else if (numeroIngresado < 7) {
    let intentoDos = prompt("cerca, pero mas")
    if (intentoDos > 7) {
        let intentoTres = prompt("cerca, pero menos")
        if (intentoTres == 7) {
            alert("Adivinaste rey")
        }
        else {
            alert("segui participandon't")
        }
    }
    else if (intentoDos < 7) {
        let intentoTres = prompt("cerca, pero mas")
        if (intentoTres == 7) {
            alert("Adivinaste rey")
        }
        else {
            alert("segui participandon't")
        }

    }
    else if (intentoDos = 7) {
        alert("Adivinaste rey")

    }

}




