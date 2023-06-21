class paciente {
    constructor(nombre, edad, altura, peso) {
            this.nombre = nombre,
            this.edad = edad,
            this.altura = altura,
            this.peso = peso

    }
    infoPaciente() {
        console.log(`El nombre del paciente es ${this.nombre} su edad es ${this.edad}, su altura es ${this.altura} y su peso es ${this.peso}`)
    }
}
//Lista de pacientes
const paciente1 = new paciente("Hector", 21, 170, 55)

const paciente2 = new paciente("Camila", 21, 150, 45)

const paciente3 = new paciente("Martha", 90, 151, 50)


const lista = [paciente1, paciente2, paciente3]; 

function verLista(array) {

    console.log(`Nuestros pacientes son: `)

    for (let paciente of array) {
        console.log(paciente.nombre, paciente.edad, paciente.altura, paciente.peso)
    }
}

//Agregar paciente
function agregarPaciente() {
    let ingresarNombre = prompt("Ingrese su nombre") 
    let ingresarEdad = parseInt(prompt ("Ingrese su edad"))
    let ingresarAltura = parseInt(prompt("Ingrese su altura") )
    let ingresarPeso = parseInt(prompt ("Ingrese su peso"))

    const pacienteNuevo = new paciente(ingresarNombre, ingresarEdad, ingresarAltura, ingresarPeso)

    lista.push(pacienteNuevo)

}
function verPacientes(array) {

    console.log(`Nuestros pacientes son: `)

    for (let paciente of array) {
        console.log(paciente.nombre, paciente.edad, paciente.altura, paciente.peso)
    }
}
//Calcular IMC
function calcularIMC(){
    let ingresarPeso = parseInt(prompt("Ingrese su peso") )
    let ingresarAltura = parseInt(prompt ("Ingrese su altura"))
    let alTURA = (ingresarAltura / 100)
    alert("Tu porcentaje de IMC " + (ingresarPeso / (alTURA * alTURA ) ))

}
//Presión
function calcularPresion(){
    let presionSistolica = parseInt(prompt("Ingrese presión sistolica (alta)"))
    let presionDiastolica = parseInt(prompt("Ingrese presión diastolica (baja)"))
    if (presionSistolica <= 90 || presionDiastolica <= 60){
        alert("Su presión arterial esta BAJA")
    }
    if(presionSistolica <= 120 && presionDiastolica <= 80){
        alert("Su presión arterial esta NORMAL")
    }
    if (presionSistolica > 120 || presionDiastolica > 80 ){
        alert("Su presión arterial esta ALTA")
    }

}
//ARRAYS 
function buscarporNombre(array) {
    let datoBusqueda = prompt("Ingrese el nombre del paciente");
    if (datoBusqueda !== null) {
        datoBusqueda = datoBusqueda.trim(); 
        if (datoBusqueda !== "") {
            
            let busqueda = array.filter(
                (dato) => dato.nombre.toLowerCase().includes(datoBusqueda.toLowerCase()));
            if (busqueda.length === 0) {
                console.log(`El paciente "${datoBusqueda}" no está nuestra lista.`);
            } else {
                verLista(busqueda);
            }
        } else {
            console.log("No se ingresó ningún dato de búsqueda.");
        }
    } else {
        console.log("El ingreso de datos fue cancelado.");
    }
}
function ordenarEdad(array) {
    const ordenEdad = [].concat(array)
    console.log(ordenEdad)
    ordenEdad.sort((a, b) => a.edad - b.edad)
    verLista(ordenEdad)
}
function ordenarAlfabeticamente(array) {
    const arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
            return 0
    })

    verLista(arrayAlfabetico)
}

function ordenarLista(array) {
    let opcion = parseInt(prompt(`¿Comó deseas ordenarlo?
          1 - Ordenar alfabeticamente
          2 - Ordenar por edad`))

    switch (opcion) {
        case 1:
            ordenarAlfabeticamente(array)
            break
        case 2:
            ordenarEdad(array)
            break;

        default:
            console.log(`La opcion ${opcion} no es válida`)
            break

    }
}

//Menu
let salirMenu = false
do{
let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
    1 - Agregar paciente
    2 - Lista de pacientes
    3 - Ordenar Lista
    4 - Buscar por Nombre
    5 - Calcular IMC
    6 - Calcular Presion Arterial
    0 - Salir del menu`))
   switch(opcionIngresada){
    case 1:
        agregarPaciente()
     break
   case 2:
       verLista(lista)
     break
    case 3:
       ordenarLista(lista)
     break
     case 4:
        buscarporNombre(lista)
      break

   case 5:
        calcularIMC()
     break
     case 6:
           calcularPresion()
     break        
      case 0:
         console.log(`Gracias por utilizar nuestra app. Saludos!`)
         salirMenu = true
      break   
      default:
         console.log("Opción no válida, ingrese alguna presente en el menu")
      break
   }
}while(!salirMenu)
