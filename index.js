

const luhn = (cedula) => {
    let arrNum = Array.from(cedula, Number);
    let suma = 0;

    for(let i = 0 ; i < arrNum.length ; i++){
        if(i % 2 !== 0){
            arrNum[i] *= 2

            if(arrNum[i] > 9)
                arrNum[i] -= 9
        }
        suma += arrNum[i]
    }
    return suma % 10  === 0? true : false
}

function validar() {
    let input = document.getElementById('cedula').value;
    if (typeof input !== 'string') 
      return false

    input = input.replace(/[^\d]/g, '')
  
    if (input.length !== 11) 
      return false
  
    return luhn(input)? alert("Cedula valida") : alert("Cedula invalida")
}