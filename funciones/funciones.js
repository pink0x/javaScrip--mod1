
// //1
function sumar () {
    console.log (100*20)
}
// //2
sumar ()

//3 

function sumarDos (altura,largo){
    let resultadoSuma = altura * largo
    console.log (resultadoSuma)
}
 

 //4
let numeroA= 100;
let numeroB= 20;

let sumar2 = sumarDos (numeroA,numeroB);


//5

function sumar5 (altura, largo) {
    let resultadoSuma = altura * largo;
    return resultadoSuma;
}
    
sumar5 (numeroA, numeroB)
console.log (sumar5 (numeroA, numeroB))

//6

const sumar6 = function (altura, largo) {
    let resultadoSuma = altura * largo;
    return resultadoSuma;
    
}

sumar6 (numeroA, numeroB)

console.log (sumar6(numeroA,numeroB))

//7

const saludar7 = (altura,largo) => altura * largo;

console.log (saludar7(numeroA,numeroB))

//8

function saludar (nombre){
    const saludo = `Hola ${nombre}, venis seguido por aca?`;
    console.log (saludo)
}

saludar ("Leonidas")

//9

const multiplicar = function (datoA, datoB){
    const resultadoMultiplicar = datoA * datoB
    console.log (resultadoMultiplicar)
}

multiplicar (489, 5996)

multiplicar (5,8)

//10

function areaTriangulo(base, altura){
    const resultadoArea = `El area del triangulo es ${base * altura /2} cm `  
    return resultadoArea
}

console.log (areaTriangulo (3,5) )

function perimetroTriangulo (ladoA, ladoB, ladoC){
    const resultadoPerimetro = `El perimetro del triangulo es ${ladoA + ladoB + ladoC} cm`
    return resultadoPerimetro
}

console.log (perimetroTriangulo (8,5,3))


//11
const compra = (precio,cantidad) => {
    const totalCompra = precio * cantidad;  
 
if (cantidad >= 10 && cantidad < 20){
     return `El total es ${totalCompra * 0.10} con 10% de descuento`
 }
else if (cantidad >= 20){
    return `El total es ${totalCompra * 0.20} con 20% de descuento`
 }
else { return `El total es ${totalCompra}`
 }
}

 console.log (compra (10,15))
 console.log (compra (10,25))

 //12
 function esMAyorDeEdad (edad){
    if (edad >= 18){
        return "Eres mayor de edad"
   }
   else {
    return "No eres mayor de edad"
   }
 }

 console.log (esMAyorDeEdad(15))
 console.log (esMAyorDeEdad(23))

 //13
function salario (sueldo){
    if (sueldo <= 10000){
        return `El impuesto a pagar el 10% de tu ingreso, $${sueldo * 10 / 100}`
    }

    else if (sueldo > 10000 && sueldo <= 20000){
        return  `El impuesto a pagar el 15% de tu ingreso, $${sueldo * 15 / 100}`
    }

    else if (sueldo > 20000){
        return `El impuesto a pagar el 20% de tu ingreso, $${sueldo * 20 / 100}`
    }
}

 console.log (salario (9000))
 console.log (salario (15000))
 console.log (salario (30000))

 //14
function diaDeLaSemana (dia){
    switch (dia){
        case 1 :
        return"Es un dia de la semana"
        break
        case 2 :
        return"Es un dia de la semana"
        break
        case 3 :
        return"Es un dia de la semana"
        break
        case 4 :
        return"Es un dia de la semana"
        break
        case 5 :
        return"Es un dia de la semana"
        break
       case 6 :
        return "Es fin de semana"
        break
        case 7 :
        return "Es fin de semana"
        break
    }
    }
//me Pregunto si no hay una forma de abreviar tantas lineas, supongo que esta por verse. Quizas con bucles? 

console.log (diaDeLaSemana (3))
console.log (diaDeLaSemana (6))



//THE END

//espero que hayan disfrutado de esto tanto como yo :D (no lo disfrute nada MUAJAJAJAJAJAJ)
//mentira, en realidad no fue tan terrible como yo pensaba..... pero bueno, esto recien empieza >.<
