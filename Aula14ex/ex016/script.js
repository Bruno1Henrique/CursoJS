function calcula(){
    let ini = document.getElementById('inicio')  
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('res')

    if(ini.value.length ==0 || fim.value.length ==0 || passo.value.length ==0){
        res.innerHTML = 'Impossível contar'
        //window.alert('ERRO, faltam dados')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido, iremos considerar passo 1')
            p = 1
        }
        if(i < f){
            //CONTAGEM CRESCENTE
            for(let c = i; c<= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            //CONTAGEM REGRESSIVA
            for(let c =i; c>= f; c-=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}