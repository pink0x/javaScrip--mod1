// //1
// let numeroUno = Number (prompt ("ingrese un numero del  al 100"))

// for (let i=0; i <= numeroUno; i ++) {
// console.log (i)
// }

// //2
// let numero2 = Number (prompt ("ingrese un numero del al 10"))

// for (let i2 = 0 ; i2 <= 10; i2 ++ ) {
//     console.log (`${i2} * ${numero2} = ${i2 * numero2}`)
// }

// //3 
// let numero = 0
// let numeroIngresado = Number (prompt ("ingrese cualquier numero, o 0 para no volver a mostrar este cartel"))

// while (numeroIngresado !==0){
//     numero = numero + numeroIngresado
//     numeroIngresado = Number (prompt ("ingrese cualquier numero, o 0 para no volver a mostrar este cartel"))   
// }

// console.log (numero)

// //4
// let numero4 = 0
// let numeroIngresado4 = Number (prompt ("ingrese cualquier numero, o 0 para no volver a mostrar este cartel"))

// do {numero4 = numero4 + numeroIngresado4
//     numeroIngresado4 = Number (prompt ("ingrese cualquier numero, o 0 para no volver a mostrar este cartel"))   
// }

// while (numeroIngresado4 !==0)

// console.log (numero4)

// //5

// let ingresaNumero = Number (prompt ("ingrese cualquier numero"))
// let numerosIngresados = [ingresaNumero]

// for (ingresaNumero of numerosIngresados){
//     if (ingresaNumero > numero){
//         let numeroMayor = Number (prompt ("ingrese un numero menor"))
//         numerosIngresados.push (numeroMayor)
//     }
//     else if (ingresaNumero < numero) {
//         let numeroMenor = Number (prompt ("ingrese un numero mayor"))
//         numerosIngresados.push (numeroMenor)
//     }
//     else if (ingresaNumero == numero){
//         alert (`adivinaste, el numero era ${numero} .Con tan solo ${numerosIngresados.length} intentos`)
//     }
// }

// la variable numero es la del ej 3. solo la invoque. 
//QUIERO DEJAR SENTADO QUE ESTO ME FUNCIONO EN EL PRIMER INTENTO, SIN QUE SE ME CUELGUE EL NAVEGADOR O LA PC. NO LO PUEDO CREER ESTOY TOCANDO EL DEV NIRVANA CON LAS MANOS!!!!!!



//6

let numero6 = Number(prompt("ingrese un numero "))
let resultadoNumero6 = null

for (let i=1; i<= numero6; i++){
    if (numero6 % i == 0){
        resultadoNumero6= numero6/i
    console.log (resultadoNumero6)}
    
}


//7


  function sonarCampana (){
    console.log ("ding dong")
    return "ding dong, "

    
}
let campanas= " "

for (let i = 0; i < 4; i++){    
    campanas = campanas + sonarCampana()
}

 console.log (campanas)
//8

const fechaLimite = "1997-8-3"
const fechas = [ "1984-10-2", "1998-3-2", "1973-15-7", "2024-21-10", "2001-1-9"]

for (const fecha of fechas) {
    if (fecha >=fechaLimite){
        console.log (`${fecha}`)
    }    
}

//9
 
let colores = ["rojo", "verde", "azul", "violeta", "amarillo", "celeste", "naranja", "rosa"]

for (i=0; i <= 7; i++){
    for (let color of colores){
    i= colores[0]
    console.log (color)
    }
    
}

//10

function colores10 (){
    for (i=0; i <= 7; i++){
        for (let color of colores){
        i= colores[0]
        console.log (color)
        }
}
 }

 colores10()

 //11

 const numeros11 = [5, 7, 10, 13, 17]
 
 for (const numeri of numeros11){
    
    console.log (`El numero es ${numeri} y su doble es ${numeri*2}`); }
 
 //12
   



 



