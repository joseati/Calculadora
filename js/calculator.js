let addSymbol = (character) => {
  document.getElementById("screen").value += character;
}

let init = () =>{
  if(isNaN(document.getElementById("screen").value) ){
      document.getElementById("screen").value = "" 
     
  }
}
let clearScreen =() => {
  document.getElementById("screen").value = ""
}



let calculate = () =>{
 

  // Declaramos las variables necesarias para el métodp
  let operation = document.getElementById("screen").value;
  
  let operator = ""
  let factor1 = "";
  let factor2 = "";
  let isOperatorFound = false

// Vamos a realizar un bucle que recorra los datos que se muestran en pantalla
  for (let i = 0; i < operation.length;i++){
  // Dentro del bucle identificamos si el dato es un número o no lo es

    if(!isNaN(operation[i])){/* Si el dato en posicion [i] es un numero isNaN devolvera false y al negarse sera true por lo tanto entra en el bucle */
      if(!isOperatorFound){
        /* Si la variable isOperatorFound es false entonces no ha encontrado el operador y los datos formaran parte del operador 1 */
        factor1 += operation[i];

      }
      else{/* Si esta variable es true el operador es encontrado  y por lo tanto los datos siguentes perteneceran al segundo factor */
       
        factor2 += operation[i]
      }
    
    }
    else{/* Si por el contratio es un dato tipo texto "+,..." isNaN devolvera true */
    isOperatorFound = true
      
    // La variable isOperatorFound sera true y operador pasara a tener ese valor(dato texto)

      if(isOperatorFound){
        operator = operation[i]

      }
      else{
        (!operation)

      }

      
      
  
    }
   if(operator && factor1 && factor2){
    let resul = mathOperations(operator,factor1,factor2);
    document.getElementById("screen").value = resul;
    console.log(resul)
   }
   else{
    resul = "E";
    document.getElementById("screen").value = resul
   }



  }
}
 
// Declaramos una método al que le pasaremos el operador y los factores como argumento, por lo tanto no es necesario volver a declararlos
let mathOperations = (operation,factor1,factor2)=>{
  // este metodo realizara las operaciones matematicas en funcion del operador que se introzuca
  let result = "Error swich";

  switch(operation){
    case "+":
      result = parseInt(factor1)  + parseInt(factor2);
      break;
    case "-":
      result = parseInt(factor1) - parseInt(factor2);
      break;
    case "*":
      result = parseInt(factor1) * parseInt(factor2);
      break;
    case "/":
      if(factor2 != 0){
        result = parseInt(factor1) / parseInt(factor2)
      }
      else{
        result = "E"
      }
      break;

  }
  
  return result
  

}
