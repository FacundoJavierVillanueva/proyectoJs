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


let lista = [paciente1, paciente2, paciente3]
if(localStorage.getItem("lista")){
    lista = JSON.parse(localStorage.getItem("lista"))
}else{
    lista.push(paciente1 ,paciente2 ,paciente3)
    localStorage.setItem("lista", JSON.stringify(lista))
}


//DOM CON ARRAY DE OBJETOS: 
let pacientesDiv = document.getElementById("pacientes")
let nuevoPacienteDiv = document.createElement("div") 
//Lista de pacientes (recorrer)
function  mostrarPacientes(array){
    pacientesDiv.innerHTML = ``
    for (let paciente of array) {
        let nuevoPacienteDiv = document.createElement("div")
        nuevoPacienteDiv.className = "col-12 col-md-6 col-lg-4 my-2"
        nuevoPacienteDiv.innerHTML = `<div id="${paciente.nombre}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${paciente.imagen}" alt="${paciente.nombre} de ${paciente.peso}">
        <div class="card-body">
           <h4 class="card-title">${paciente.nombre}</h4>
           <p>Edad: ${paciente.edad}</p>
           <p class="">Peso: ${paciente.peso}</p>
           <p class="">Altura: ${paciente.altura}</p>
        <button id="" class="btn btn-outline-success">Calcular IMC</button>
        </div>
     </div>`
pacientesDiv.appendChild(nuevoPacienteDiv)
    }
}
//capturando IDs de botones
let verListaPacientes = document.getElementById("verPacientes")
verListaPacientes.addEventListener("click", ()=>{
   mostrarPacientes(lista)
})

let ocultarLista = document.getElementById("ocultarLista")
ocultarLista.ondblclick = () => {
   pacientesDiv.innerHTML = ``
}


//ordenando arrays por criterio
let selectOrden = document.getElementById("selectOrden")

selectOrden.addEventListener("change", () => {
   console.log(selectOrden.value)
   switch(selectOrden.value){
      case "1":
         ordenarMayorMenor(lista)
      break
      case "2":
         ordenarMenorMayor(lista)
      break
      case "3":
         ordenarAlfabeticamenteNombre(lista)
      break
      default:
         mostrarCatalogo(lista)
      break
   }
}
)

//hoisting 
function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
   console.log(menorMayor)
   menorMayor.sort((a,b) => a.edad - b.edad)
   mostrarPacientes(menorMayor)
 }
 
 function ordenarMayorMenor(array){
   const mayorMenor = [].concat(array)
   mayorMenor.sort((elem1 ,elem2) => elem2.edad - elem1.edad)
   mostrarPacientes(mayorMenor)
 }
 
 function ordenarAlfabeticamenteNombre(array){
   const arrayAlfabetico = [].concat(array)
   arrayAlfabetico.sort( (a,b) =>{
      if (a.nombre > b.nombre) {
         return 1
       }
       if (a.nombre < b.nombre) {
         return -1
       }
       return 0
   })
 
   mostrarPacientes(arrayAlfabetico)
 }
 //DOM agregar paciente
let agregarPacienteBtn = document.getElementById("guardarPacienteBtn")

agregarPacienteBtn.addEventListener("click", function(event){
   event.preventDefault()
   agregarPaciente(lista)
})
 //agregar paciente para DOM:
 function agregarPaciente(array){
   let nombreIngresado = document.getElementById("nombreInput")
   let edadIngresada = document.getElementById("edadInput")
   let alturaIngresada = document.getElementById("alturaInput")
   let pesoIngresado = document.getElementById("pesoInput")
   
   const pacienteNuevo = new paciente(nombreIngresado.value, edadIngresada.value, alturaIngresada.value, pesoIngresado.value, "pacienteNuevo.jpg")
   //pusheo del array:
   array.push(pacienteNuevo)
   localStorage.setItem("lista", JSON.stringify (array))
   mostrarPacientes(array)
   
   nombreIngresado.value = ""
   edadIngresada.value = ""
   alturaIngresada.value = ""
   pesoIngresado.value = ""
}


