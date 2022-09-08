var Op1 = "piedra";
var Op2 = "Papel";
var Op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === Op1 && cpu === Op3){
            console.log("el usuario gano con " + Op1)
        }
        else if(user === Op2 && cpu === Op1){
            console.log("El usuario gano con " + Op2)
        }
        else if(user === Op3 && cpu === Op2){
            console.log("El usuario gano con " + Op3)
        }
        else {
            console.log("La CPU Gano!!")
        }
    }
    else if(user === cpu){
        console.log("Empate")
    }
}

resultado(Op1, Op2)
