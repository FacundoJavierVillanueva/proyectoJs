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
//Menu
let salirMenu = false
do{
let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
   1 - Calcular IMC
   2 - Calcular Presion Arterial
   0 - Salir del menu`))
   switch(opcionIngresada){
      case 1:
         calcularIMC()
      break
      case 2:
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
