function calcularIMC(weight, heigth, callback){
    if(weight === undefined || heigth === undefined){
        throw Error("need two parameters: weight and heigth")
    
    }
    let imc = weight / (heigth*heigth);
    if(callback === "function"){
      return callback(imc);
    }
    return imc;
    
}

function ClassificarIMC(imc){
    if(imc <= 16.9){
      return "muito abaixo do peso";
    }else if(imc <= 18.4){
      return "abaixo do peso";
    }else if(imc <= 24.5){
      return "normal";
    }else if(imc <= 29.9){
      return "acima do peso";
    }else if(imc <= 34.9){
      return "obesidade 1";
    }else if(imc <= 40){
      return "obesidade 2";
    }else{
      return "obesidade 3";
      }
}

let imc = calcularIMC(74, 1.70);
let imc2 = calcularIMC(60, 1.65, calcularIMC);