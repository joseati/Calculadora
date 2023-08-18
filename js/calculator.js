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
  let isOperatorFound = false;
  let negative = false
  let stopOperator = false
 

// Vamos a realizar un bucle que recorra los datos que se muestran en pantalla
  for (let i = 0; i < operation.length;i++){
  // Dentro del bucle identificamos si el dato es un número o no lo es
    if((operation[0] === "-" || operation[0] == "+" )&& negative === false){
        // factor1 += operation[0]
        factor1 += operation[0]
        negative = true
         console.log("....", factor1)
    }
    else if(!isNaN(operation[i] || (operation[0] == "-"|| operation[0] == "+")))
    {/* Si el dato en posicion [i] es un numero isNaN devolvera false y al negarse sera true por lo tanto entra en el bucle */
      if(!isOperatorFound){
        /* Si la variable isOperatorFound es false entonces no ha encontrado el operador y los datos formaran parte del operador 1 */
        factor1 += operation[i];
        console.log("FACT 1...", factor1)

      }
      else{/* Si esta variable es true el operador es encontrado  y por lo tanto los datos siguentes perteneceran al segundo factor */

        // if( (operation[i] == "+" || operation[i] == "-") ){
        //   factor2 += operation[i]
        //   console.log("factor2", factor2)}
          factor2 += operation[i]
          console.log("factor2", factor2)
          for(let j =0; j < factor2.length; j++){
            if(factor2[j + 1] == "+" || factor2[j + 1] == "-" || factor2[j + 1] == "*" || factor2[j + 1] == "/"){
              factor2 = "E"
            }
            console.log(factor2, `FAC2`)
          }
        
      }
    }

    else{/* Si por el contratio es un dato tipo texto "+,..." isNaN devolvera true */      
    // La variable isOperatorFound sera true y operador pasara a tener ese valor(dato texto)
      if(!isOperatorFound && !stopOperator ){
        stopOperator = true
        isOperatorFound = true
        operator = operation[i]
        
        console.log("operador", operator)

      }else{
        factor2 +=operation[i]
      }
      
    }

    
   
   if(operator && factor1 && factor2){
    let resul = mathOperations(operator,factor1,factor2);
     
   
    document.getElementById("screen").value = resul;
    console.log(resul)
    
    
   }
  //  else if (resul === NaN) {
  //   resul = "E";
  //   document.getElementById("screen").value = resul
    
  //  }
  //  else{
  //   resul = "E";
    
    
  //   }
  }
}
 
// Declaramos una método al que le pasaremos el operador y los factores como argumento, por lo tanto no es necesario volver a declararlos
let mathOperations = (operation,factor1,factor2)=>{
  // este metodo realizara las operaciones matematicas en funcion del operador que se introzuca
  let result = "Error";
  

  switch(operation){
    case "+":
      result = parseInt(factor1)  + parseInt(factor2);
      console.log(result)
      console.log(`factor1`, factor1)
      console.log(`factor2`, factor2)
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


let calculate2 = () => {
  let operador = document.getElementById("screen").value
  let res ;
  for(let i = 0 ; i < operador.length; i++){
    try{
      res = eval(operador);
      console.log(res)
    }catch(e){
      console.log("E")
    }
   
  }
  if(res === undefined){
    res = "E";

  }

  document.getElementById("screen").value = res;
}
