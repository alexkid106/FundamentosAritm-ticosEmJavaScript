let numero = Array(5);





for(let i=0;i < numero.length;i++){

 numero[i] = gets();

}



let positivos = numero.filter(value => value > 0);



let negativos = numero.filter(value => value < 0);



let pares = numero.filter(value => value % 2 === 0);



let impares = numero.filter(value => value % 2 !== 0);



console.log(pares.length + " par(es)");



console.log(impares.length + " impar(es)");



console.log(positivos.length + " positivo(s)");



console.log(negativos.length + " negativo(s)");