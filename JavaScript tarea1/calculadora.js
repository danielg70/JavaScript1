

let numero1 = "";
while (numero1==""){
    numero1 = prompt("Indica el primer numero");
    numero1 = parseFloat(numero1);
    if(numero1 === NaN) numero1 = ''
}


let numero2 = "";
while (numero2==""){
    numero2 = prompt("Indica el segundo numero");
    numero2 = parseFloat(numero2);
    if(numero2 === NaN) numero2 = ''
}


operacion = prompt("Elija la operacion");

switch(operacion)  {
    
    case "+":
    alert("Resultado Suma :" + (numero1 + numero2));
    break;
    case "-":
    alert("Resultado Resta :" + (numero1 - numero2));
    break;
    case "*":
    alert("Resultado Multiplicacion :" + (numero1 * numero2));
    break;
    case "/":
    alert("Resultado division : " + (numero1 / numero2));
    break;
    default :
    alert("Ingresa una operacion correcta");
    break; 

}

