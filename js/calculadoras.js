//Calcular IMC
function calcularIMC() {
    let aAltura = document.getElementById("aAltura").value / 100;
    let pPeso = document.getElementById("pPeso").value;
  
    let imc = pPeso / aAltura ** 2;
    let text=""
    if (imc < 18.5) {
       Swal.fire("Usted esta muy delgado")
    } else if (imc < 24.9) {
      Swal.fire("Usted se encuentra normal")
    } else if (imc < 29.9) {
      Swal.fire("Usted tiene sobrepeso")
    } else if (imc < 39.9) {
      Swal.fire("Usted tiene obesidad")
    } else if (imc > 39.9) {
      Swal.fire("Usted tiene obesidad mórbida")
    }
  }

  //CALCULAR PRESION
 function calcularPresion(){
    let presionSistolica = document.getElementById("ingSis").value;
    let presionDiastolica = document.getElementById("ingDias").value;
    if (presionSistolica <= 90 || presionDiastolica <= 60){
        Swal.fire("Su presión arterial esta BAJA")
    }
    else if(presionSistolica <= 120 && presionDiastolica <= 80){
        Swal.fire("Su presión arterial esta NORMAL")
    }
    else if(presionSistolica > 120 || presionDiastolica > 80 ){
        Swal.fire("Su presión arterial esta ALTA")
    }
  }