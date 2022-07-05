valores = [8,1,7,4,2,9]

//console.log(valores[0])

/*for(pos=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (pos in valores){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

console.log(valores.indexOf(7))