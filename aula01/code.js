//se .. if
function se(n){
    if(n<10){
        console.log("você é criança")
    }

    else if(n>=10 && n<=20){ //e
        console.log("você é adolescente")
    }
    else if (n === 70){
        console.log("você é idoso")
    }
    else if (n>20 || n<40){ //ou
        console.log("você é adulto")
    }
    else{
        console.log("Não atende a condição!")
    }
}

se(11)

//para .. for
function para(n){
    for(let i=0;i<n;i++){
        if(n<10){
            
    }
}
para(11)

//enquanto .. while
function enquanto(n){
    let i=0
    while(i<n){
        i++
        if(i==10){
            console.log("Você é criança")
            break
        } else {
            console.log("Você é adulto!")
        }
        }
    }
}

enquanto(3)

//faça enquanto .. do while
function facaenq(n){
    let i=0
    do{
        i++
        if(i==10){
            console.log("Você é criança")
            break
        } else{
            console.log("Você é adulto")
        }
    } while(i<n)
}

//compara caso .. switch case
function caso(n){
    switch(n){
        case 1:console.log("você escolheu 1")
        break
        case 2:console.log("você escolheu 2")
        break
        default:console.log("fora da condição")

    }
}
caso(2)