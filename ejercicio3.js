
var number= 18;
function rango(number){
    
    if (number >= 0 && number <= 25){
        console.log("El numero esta en el rango de 0 a 25");
    }else if(number>=26 && number <=100){
        console.log("El numero esta en el rango de 26 a 100");
    }else if(number <= 0){
        console.log("El numero es menor a 0");
    }else if(number >= 100){
        console.log("El numero es mayor a 100");
    }else{
        console.log("El dato no es valido");
    }
};
rango(number);