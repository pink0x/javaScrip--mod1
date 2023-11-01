//1
let miNombre = "Sofia"

//2
let miApellido = "Pincolini"

//3
let miEdad = 30

//4
let miMascota = "Rey"

//5
let edadMascota = 7

//6
console.log (miNombre, miApellido, miEdad, miMascota, edadMascota)

//7
let nombreCompleto =  "miNombre" + "miApellido"

//8
let textoPresentacion = `Hola, me llamo ${miNombre} ${miApellido}, tengo ${miEdad} años. Vivo con ${miMascota}, mi gata, que tiene ${edadMascota} años.`

console.log (textoPresentacion)

//9
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad % edadMascota
let divisionEdades = miEdad / edadMascota

//10
let alumno = {
    altura: 170 ,
    peso: "57 kg",
    sexo: "todos los dias, jajaj. Femenino",
    cabello: "castaño",
    libertaria: false,
    }

    console.table (alumno)

 //11

    let mascota = {
        colorDePelo: "gris",
        colorDeOjos: "verdes",
        actitud: "achanchada",
        actividadFavorita: "dormir",
        cazadora: false,
    }

    console.table (mascota)

 //12   

    let frutas = [ "banana", "manzana", "frutilla", "kiwi", "mandarina"]

    console.log (frutas)

    console.log (frutas [0])
    console.log (frutas [1])
    console.log (frutas [2])
    console.log (frutas [3])
    console.log (frutas [4])

//13
    let soyMayorDeEdad = prompt ("Cual es tu edad?")      
    
    console.log (soyMayorDeEdad >=18)
    console.log ("soy mayor de edad, " + soyMayorDeEdad)

//14
    let numeros = [12, 45, 22, 12, 92]

    console.log (numeros)

    console.log (numeros [0])
    console.log (numeros [1])
    console.log (numeros [2])
    console.log (numeros [3])
    console.log (numeros [4])
  
//15 

    let familia = ["pepe", "Juan", "Leonidas", "MaryJAne", "Frank" ]

    console.log (familia)

    console.log (familia [0])
    console.log (familia [1])
    console.log (familia [2])
    console.log (familia [3])
    console.log (familia [4])
 
 //16

let textoAleatorio = `Me gustan las ${frutas[1]}, una vez llegue a comerme ${numeros[3]} en un solo dia. Superando asi el record de ${familia[0]}`

console.log (textoAleatorio)

//17
//use la variable del ej 13 para obtener el dato de la edad y asi no tener q repetir el prompt

let edad1 = soyMayorDeEdad
let edad2 = prompt ("Dime la edad de tu compañera")

let edadesIguales = "mi edad es igual a la de mi compañera" + (edad1 == edad2) 

let soyMayor = "mi edad es mayor a la de mi compañera" + (edad1 > edad2)

let soyMenor = "mi edad es menor a la de mi compañera" + (edad1 < edad2)

 console.log (edadesIguales)
 console.log (soyMayor)
 console.log (soyMenor)

//18

let edad18 = Number (prompt ("Ingrese su edad"))

let altura18 = Number (prompt ("Ingrese su altura"))

puedeSubir = edad18 > 6 && altura18 > 120

console.log (puedeSubir)


//19

let pase= prompt( "tiene pase vip, normal o limitado?")
let saldo= Number(prompt("ingrese su saldo"))
let requisitoDisco= (saldo >= 1000 || pase== "vip" )
alert(`puede pasar: ${requisitoDisco} `)







